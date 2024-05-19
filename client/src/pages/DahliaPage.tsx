import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Dahlia from '../models/Dahlia';
import Loader from '../components/Loader';

import { GiFamilyHouse } from "react-icons/gi";
import { SiSpring } from "react-icons/si";
import { TbLineHeight } from "react-icons/tb";
import { IoWaterSharp } from "react-icons/io5";
import { CiSun } from "react-icons/ci";

interface Dahlia {
  name: string;
  genus: string;
  season: string;
  height: string;
  water: string;
  sunlight: string;
}

const DahliaPage = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [dahliaData, setDahliaData] = useState<Dahlia | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/dahlia");
        const parsedData = await response.json();
        setDahliaData(parsedData);
      } catch(error) {
        console.error("Error fetching from API: ", error);
      }
    };
    
    fetchData();
  }, []);

  const adjustDahliaForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    const rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [5, 5, 5];
      screenPosition = [-0.2, -1.3, -0.8];
    } 
    if (window.innerWidth === 768) {
      screenScale = [5, 5, 5];
      screenPosition = [0, -0.6, 0];
    } 
    if (window.innerWidth > 768) {
      screenScale = [5, 5, 5];
      screenPosition = [0, -0.8, 0];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [roseScale, rosePosition, roseRotation] = adjustDahliaForScreenSize();

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

            <Dahlia
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
          {dahliaData && (
            <div className='flex flex-col space-y-2 items-center justify-center bg-white rounded-md shadow-sm py-4 px-8 font-serif'>
              <h1 className='text-4xl text-purple-300 font-semibold my-2'>
                {dahliaData.name}
              </h1>
              <div className='flex flex-col space-y-3 justify-start'>
                <h2 className='flex items-center text-lg font-medium'>
                  <GiFamilyHouse size={20} className='mr-2' />{dahliaData.genus}
                </h2>
                <h3 className='flex items-center text-lg font-medium'>
                  <SiSpring size={15} className='mr-2 text-green-600' />{dahliaData.season}
                </h3>
                <h3 className='flex items-center text-lg font-medium'>
                  <TbLineHeight size={20} className='mr-2' />{dahliaData.height}
                </h3>
                <h3 className='flex items-center text-lg font-medium'>
                  <IoWaterSharp size={20} className='mr-2 text-blue-400' />{dahliaData.water}
                </h3>
                <h3 className='flex items-center text-lg font-medium'>
                  <CiSun size={20} className='mr-2 text-yellow-400' />{dahliaData.sunlight}
                </h3>
              </div>
            </div>
          )}
      </div>
    </div>
    
  )
}

export default DahliaPage