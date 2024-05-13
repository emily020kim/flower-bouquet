import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Rose from "../models/Rose";
import Loader from '../components/Loader';

const RosePage = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustRoseForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    const rotation = [0.2, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [2.3, 2.3, 2.3];
      screenPosition = [-0.2, -1.3, -0.5];
    } 
    if (window.innerWidth === 768) {
      screenScale = [1.9, 1.9, 1.9];
      screenPosition = [0, -0.6, -0.5];
    } 
    if (window.innerWidth > 768) {
      screenScale = [2.2, 2.2, 2.2];
      screenPosition = [0, -0.8, -0.5];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [roseScale, rosePosition, roseRotation] = adjustRoseForScreenSize();

  return (
    <div className='flex flex-col h-screen md:flex-row w-full'>
      <section className='w-full md:w-1/2 h-full md:h-screen relative'>
        <Canvas 
          className={`w-full h-screen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight groundColor="#000000" intensity={1} />

            <Rose
              position={rosePosition}
              scale={roseScale}
              rotation={roseRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
          </Suspense>
        </Canvas>
      </section>

      <div className='flex flex-col w-full md:w-1/2 h-full md:h-screen items-center justify-center'>
        <h1 className='font-serif font-semibold text-2xl md:text-3xl lg:text-4xl text-red-300'>Emily's Bouquet</h1>
        <a href='/bouquet'>
          <button
            className='flex bg-red-400 items-center px-2 py-3 rounded-md text-white font-normal font-serif mt-3'
          >
            Welcome
          </button>
        </a>
      </div>
    </div>
    
  )
}

export default RosePage