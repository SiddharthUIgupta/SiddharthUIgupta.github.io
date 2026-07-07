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
    // Dynamic cinematic camera path: arcs to the side and zooms in slightly
    const targetX = Math.sin(scrollProgress * Math.PI) * 2.5
    const targetY = -scrollProgress * 3.5
    const targetZ = 6.0 - scrollProgress * 2.5

    // Smoothly interpolate current camera position toward the target
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.06)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.06)
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.06)

    // Subtle atmospheric camera float
    const time = state.clock.getElapsedTime()
    state.camera.position.x += Math.sin(time * 0.4) * 0.008
    state.camera.position.y += Math.cos(time * 0.3) * 0.008

    // Track the center of the viewport relative to the scroll section
    state.camera.lookAt(new THREE.Vector3(0, -scrollProgress * 2.0, 0))
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
