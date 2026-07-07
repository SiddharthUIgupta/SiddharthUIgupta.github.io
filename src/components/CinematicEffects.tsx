import { EffectComposer, Bloom, ChromaticAberration, DepthOfField } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import * as THREE from 'three'

export default function CinematicEffects() {
  const scrollProgress = useSelector((state: RootState) => state.portfolio.scrollProgress)

  // Dynamically scale chromatic aberration offset with scroll progress
  const chromaticOffset = 0.0015 + scrollProgress * 0.0025

  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0.0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.9}
        blendFunction={BlendFunction.SCREEN}
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new THREE.Vector2(chromaticOffset, chromaticOffset)}
        radialModulation={false}
        modulationOffset={0}
      />
    </EffectComposer>
  )
}
