import { useFrame } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { RootState } from '../store'
import IridescentRing from './IridescentRing'
import ParticleCloud from './ParticleCloud'
import CinematicEffects from './CinematicEffects'

export default function Scene3D() {
  const scrollProgress = useSelector((state: RootState) => state.portfolio.scrollProgress)

  useFrame((state) => {
    let targetX = 0
    let targetY = 0
    let targetZ = 6.0
    const lookTarget = new THREE.Vector3(0, 0, 0)

    if (scrollProgress < 0.25) {
      // S0 - S1: Look at the iridescent ring
      const t = scrollProgress / 0.25
      targetX = Math.sin(t * Math.PI * 0.5) * 1.5
      targetY = 0
      targetZ = THREE.MathUtils.lerp(6.0, 5.0, t)
      lookTarget.set(0, 0, 0)
    } else if (scrollProgress >= 0.25 && scrollProgress < 0.6) {
      // S2 - S4: Descend into the particle cloud
      const t = (scrollProgress - 0.25) / 0.35
      targetX = Math.sin(scrollProgress * Math.PI * 2.0) * 2.5
      targetY = THREE.MathUtils.lerp(0, -3.5, t)
      targetZ = THREE.MathUtils.lerp(5.0, 6.0, t)
      lookTarget.set(0, targetY, 0)
    } else if (scrollProgress >= 0.6 && scrollProgress < 0.8) {
      // S5 - S6: Look down at the flat spinning disc (Experience/Journey)
      const t = (scrollProgress - 0.6) / 0.2
      targetX = Math.cos(scrollProgress * Math.PI * 2.0) * 2.8
      targetY = THREE.MathUtils.lerp(-3.5, -1.5, t) // rise above
      targetZ = 4.8
      lookTarget.set(0, -3.5, 0)
    } else {
      // S7: Secret Sky - Pan underneath and look up!
      const t = (scrollProgress - 0.8) / 0.2
      targetX = THREE.MathUtils.lerp(targetX, 0.0, t)
      targetY = THREE.MathUtils.lerp(-1.5, -6.5, t)
      targetZ = THREE.MathUtils.lerp(4.8, 1.2, t)
      // Look up at the floating particle sky
      lookTarget.set(0, 2.5, 0)
    }

    // Smoothly interpolate current camera position toward the target
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05)
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05)

    // Subtle atmospheric camera float
    const time = state.clock.getElapsedTime()
    state.camera.position.x += Math.sin(time * 0.4) * 0.006
    state.camera.position.y += Math.cos(time * 0.3) * 0.006

    // Track the interpolated camera target
    state.camera.lookAt(lookTarget)
  })

  return (
    <>
      {/* Dark space-like ambient light */}
      <ambientLight intensity={0.15} />

      {/* Cinematic directional lights */}
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00ffcc" />
      <directionalLight position={[-5, -10, -5]} intensity={1.0} color="#ff00aa" />
      <pointLight position={[0, 0, 2]} intensity={2.0} color="#ffffff" distance={10} />

      {/* 3D Shader Objects */}
      <group position={[0, 0, 0]}>
        <IridescentRing />
      </group>

      <group position={[0, -3.5, 0]}>
        <ParticleCloud />
      </group>

      {/* Post Processing Effects */}
      <CinematicEffects />
    </>
  )
}
