"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls, ContactShadows } from "@react-three/drei";
import HeroModel from "./HeroModel";
import AdaptiveQuality from "./AdaptiveQuality";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
        shadows
      >
        <ambientLight intensity={1} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={2} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        
        {/* Soft, clean studio environment */}
        

        <ScrollControls pages={5} damping={0.1}>
          <HeroModel />
        </ScrollControls>
        
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.5} 
          scale={10} 
          blur={2} 
          far={4} 
          color="#000000"
        />

        <AdaptiveQuality />
      </Canvas>
    </div>
  );
}
