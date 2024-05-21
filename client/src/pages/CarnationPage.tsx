import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Carnation from '../models/Carnation';
import Loader from '../components/Loader';

import { GiFamilyHouse } from "react-icons/gi";
import { SiSpring } from "react-icons/si";
import { TbLineHeight } from "react-icons/tb";
import { IoWaterSharp } from "react-icons/io5";
import { CiSun } from "react-icons/ci";

interface Carnation {
  name: string;
  genus: string;
  season: string;
  height: string;
  water: string;
  sunlight: string;
}

const CarnationPage = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [carnationData, setCarnationData] = useState<Carnation | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/carnation");
        const parsedData = await response.json();
        setCarnationData(parsedData);
      } catch(error) {
        console.error("Error fetching from API: ", error);
      }
    };
    
    fetchData();
  }, []);

  const adjustCarnationForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    const rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2];
      screenPosition = [-0.25, -0.2, 0];
    } 
    if (window.innerWidth === 768) {
      screenScale = [0.18, 0.18, 0.18];
      screenPosition = [0, 0.35, 0];
    } 
    if (window.innerWidth > 768) {
      screenScale = [0.2, 0.2, 0.2];
      screenPosition = [0, 0.4, 0];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [roseScale, rosePosition, roseRotation] = adjustCarnationForScreenSize();

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

            <Carnation
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
          {carnationData && (
            <div className='flex flex-col space-y-2 items-center justify-center bg-white rounded-md shadow-sm py-4 px-8 font-serif'>
              <h1 className='text-4xl text-pink-700 font-semibold my-2'>
                {carnationData.name}
              </h1>
              <div className='flex flex-col space-y-3 justify-start'>
                <h2 className='flex items-center text-lg font-medium'>
                  <GiFamilyHouse size={20} className='mr-2' />{carnationData.genus}
                </h2>
                <h3 className='flex items-center text-lg font-medium'>
                  <SiSpring size={15} className='mr-2 text-green-600' />{carnationData.season}
                </h3>
                <h3 className='flex items-center text-lg font-medium'>
                  <TbLineHeight size={20} className='mr-2' />{carnationData.height}
                </h3>
                <h3 className='flex items-center text-lg font-medium'>
                  <IoWaterSharp size={20} className='mr-2 text-blue-400' />{carnationData.water}
                </h3>
                <h3 className='flex items-center text-lg font-medium'>
                  <CiSun size={20} className='mr-2 text-yellow-400' />{carnationData.sunlight}
                </h3>
              </div>
            </div>
          )}
      </div>
    </div>
    
  )
}

export default CarnationPage