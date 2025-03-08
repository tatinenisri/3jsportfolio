import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  // Generate a denser star field but optimize rendering
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 4 })); // 🔥 15,000 stars for ultra-density

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20; // 🔥 Slower rotation for realism
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.0015} // 🔥 Small size to maintain clarity with more stars
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 3] }} // 🔥 Move camera slightly back to fit more stars
        dpr={[1, 1.5]} // 🔥 Adaptive resolution for performance
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
