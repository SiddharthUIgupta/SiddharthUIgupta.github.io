import { useLayoutEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store'
import { setActiveSection, setScrollProgress } from './store/portfolioSlice'
import Scene3D from './components/Scene3D'
import OverlayUI from './components/OverlayUI'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function PortfolioApp() {
  const dispatch = useDispatch()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Create a ScrollTrigger that listens to the container's vertical scroll
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1, // Smooth scrolling lag
      onUpdate: (self) => {
        const progress = self.progress
        // Update global scroll progress
        dispatch(setScrollProgress(progress))

        // Split progress into 8 sections (0 to 7)
        const section = Math.min(Math.floor(progress * 8), 7)
        dispatch(setActiveSection(section))
      },
    })

    return () => {
      trigger.kill()
    }
  }, [dispatch])

  return (
    <div className="app-container">
      {/* 3D Canvas Layer */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Fixed HTML UI Overlay Layer */}
      <OverlayUI />

      {/* Scroll Sections defining scroll height */}
      <div className="scroll-container" ref={scrollContainerRef}>
        <div id="section-0" className="scroll-section" />
        <div id="section-1" className="scroll-section" />
        <div id="section-2" className="scroll-section" />
        <div id="section-3" className="scroll-section" />
        <div id="section-4" className="scroll-section" />
        <div id="section-5" className="scroll-section" />
        <div id="section-6" className="scroll-section" />
        <div id="section-7" className="scroll-section" />
      </div>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <PortfolioApp />
    </Provider>
  )
}

export default App
