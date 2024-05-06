import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Flowers from "../models/Flowers";
import Loader from '../components/Loader';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustFlowersForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [1, -1, -35];
    const rotation = [0.2, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.03, 0.03, 0.03];
    } else {
      screenScale = [0.03, 0.03, 0.03];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [flowersScale, flowersPosition, flowersRotation] = adjustFlowersForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-pink-50 ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight groundColor="#000000" intensity={1} />

          <Flowers
            position={flowersPosition}
            scale={flowersScale}
            rotation={flowersRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home