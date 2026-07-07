import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

// Simplex 3D Noise GLSL helper functions
const simplexNoiseGLSL = `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - D.yyy;

  i = mod(i, 289.0 );
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}
`

const vertexShader = `
uniform float uTime;
uniform float uScrollProgress;
attribute float aSize;
attribute vec3 aRandom;
varying vec3 vColor;
varying float vAlpha;

${simplexNoiseGLSL}

void main() {
  vec3 pos = position;

  // Generate continuous swirling noise
  float noise = snoise(pos * 0.4 + vec3(0.0, uTime * 0.15, 0.0));

  // Circular spiral physics as user scrolls
  float angle = uScrollProgress * 5.0 + aRandom.x * 6.28;
  float initialRadius = length(position.xz);
  float radius = initialRadius * (1.0 + uScrollProgress * 3.5);

  pos.x = cos(angle + noise * 0.5) * radius;
  pos.z = sin(angle + noise * 0.5) * radius;
  pos.y += sin(uTime * 0.2 + aRandom.y * 20.0) * 0.8 * (uScrollProgress + 0.1);
  pos += aRandom * noise * uScrollProgress * 1.5;

  vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * modelViewPosition;

  // Size attenuation with distance
  gl_PointSize = (aSize * 18.0) / -modelViewPosition.z;

  // Cinematic color gradient: from dark cyan to bright pink/violet based on scroll
  vec3 color1 = vec3(0.08, 0.58, 0.75); // Dark Cyan
  vec3 color2 = vec3(0.85, 0.0, 0.65);  // Vibrant Pink/Magenta
  vColor = mix(color1, color2, clamp((pos.y + 2.0) * 0.25, 0.0, 1.0) + uScrollProgress * 0.3);

  // Fade-in when starting scroll, stay visible towards the end
  float alpha = smoothstep(0.15, 0.4, uScrollProgress);
  vAlpha = alpha * 0.75;
}
`

const fragmentShader = `
varying vec3 vColor;
varying float vAlpha;

void main() {
  // Render smooth, circular glowing particles
  float dist = length(gl_PointCoord - vec2(0.5));
  if (dist > 0.5) discard;

  float intensity = smoothstep(0.5, 0.0, dist);
  gl_FragColor = vec4(vColor, intensity * vAlpha);
}
`

export default function ParticleCloud() {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const scrollProgress = useSelector((state: RootState) => state.portfolio.scrollProgress)

  const count = 8000

  const [positions, sizes, randoms] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    const rand = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Place particles initial state in a cylinder/ring
      const angle = Math.random() * Math.PI * 2
      const radius = 1.0 + Math.random() * 1.5 // Initial ring-like orbit
      
      pos[i * 3 + 0] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.5
      pos[i * 3 + 2] = Math.sin(angle) * radius

      sz[i] = 0.5 + Math.random() * 1.5

      rand[i * 3 + 0] = Math.random() - 0.5
      rand[i * 3 + 1] = Math.random() - 0.5
      rand[i * 3 + 2] = Math.random() - 0.5
    }

    return [pos, sz, rand]
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time
      materialRef.current.uniforms.uScrollProgress.value = scrollProgress
    }

    if (pointsRef.current) {
      // Gentle counter-rotation
      pointsRef.current.rotation.y = -time * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aSize"
          args={[sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          args={[randoms, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uScrollProgress: { value: 0 },
        }}
      />
    </points>
  )
}
