import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Component to Load the Model
const Model = () => {
  const { scene } = useGLTF("./computer.glb");
  const ref = useRef();
  return <primitive ref={ref} object={scene} scale={10.5} position={[0, -4, 0]} />; // Adjusted position
};

// Main App Component
const ComputersCanvas = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [3,4,10] }}
      gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={8.0} />
          <directionalLight position={[0, 10, 0]} intensity={10.0} /> {/* Light coming from the top */}
          <Model />
          <OrbitControls enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> {/* Disabled y-axis rotation */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
