import { useEffect, useState } from 'react';
import { LuFlower } from "react-icons/lu";

import carnation from "../assets/images/carnation.png";
import dahlia from "../assets/images/dahlia.png";
import hyacinth from "../assets/images/hyacinth.png";
import lavender from "../assets/images/lavender.png";
import lily from "../assets/images/lily.png";
import orchid from "../assets/images/orchid.png";
import rose from "../assets/images/rose.png";
import tulip from "../assets/images/tulip.png";

const images = [
    { image: rose },
    { image: lavender },
    { image: tulip },
    { image: orchid }, 
    { image: dahlia },
    { image: hyacinth },
    { image: lily },
    { image: carnation },
]

interface Flower {
    name: string;
    genus: string;
    season: string;
}

const FlowerCard = () => {
    const [data, setData] = useState<Flower[] | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/flowers");
                const parsedData = await response.json();
                setData(parsedData);
            } catch(error) {
                console.error("Error fetching from API: ", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-3 gap-4 p-4 justify-items-center h-screen'>
            {data && data.map((flower, index) => (
                <div key={index} className='flex flex-col space-y-4 items-center justify-center bg-white w-2/3 rounded-md p-4'>
                    <h1 className='text-2xl text-pink-400 font-semibold'>{flower.name}</h1>
                    <img 
                        src={images[index % images.length].image} 
                        alt={flower.name} 
                    />
                    <h2 className='text-base'>Genus: {flower.genus}</h2>
                    <h3 className='text-sm bg-pink-300 rounded-sm p-1'>{flower.season}</h3>
                    {/** route to flower */}
                    <a href='/bouquet'>
                        <button
                            className='flex bg-pink-500 text-sm items-center px-2 py-2 rounded-md text-white font-serif'
                        >
                            Take a look <LuFlower size={15} className="text-white ml-1" />
                        </button>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default FlowerCard