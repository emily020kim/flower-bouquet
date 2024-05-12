import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Flowers from "../models/Flowers";
import Loader from '../components/Loader';
import { PiFlowerThin } from "react-icons/pi";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustFlowersForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    const rotation = [0.2, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [4, 4, 4];
      screenPosition = [-0.2, -4, -0.5];
    } 
    if (window.innerWidth === 768) {
      screenScale = [3, 3, 3];
      screenPosition = [0, -2, -0.5];
    } 
    if (window.innerWidth > 768) {
      screenScale = [3.5, 3.5, 3.5];
      screenPosition = [0, -2, -0.5];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [flowersScale, flowersPosition, flowersRotation] = adjustFlowersForScreenSize();

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

      <div className='flex flex-col w-full md:w-1/2 h-full md:h-screen items-center justify-center'>
        <h1 className='font-serif font-semibold text-2xl md:text-3xl lg:text-4xl text-red-300'>Emily's Bouquet</h1>
        <a href='/bouquet'>
          <button
            className='flex bg-red-400 items-center px-2 py-3 rounded-md text-white font-normal font-serif mt-3'
          >
            Welcome <PiFlowerThin size={20} className="text-white ml-1" />
          </button>
        </a>
      </div>
    </div>
    
  )
}

export default Home