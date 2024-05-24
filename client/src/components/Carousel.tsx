import React, { useEffect, useRef, useState } from 'react';
import { LuFlower } from 'react-icons/lu';
//import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import carnation from "../assets/images/carnation.png";
import sunflower from "../assets/images/sunflower.png";
import hyacinth from "../assets/images/hyacinth.png";
import lavender from "../assets/images/lavender.png";
import lily from "../assets/images/lily.png";
import orchid from "../assets/images/orchid.png";
import rose from "../assets/images/rose.png";
import tulip from "../assets/images/tulip.png";

interface Flower {
    name: string;
    genus: string;
    season: string;
}

const Carousel: React.FC = () => {
    const itemsRef = useRef<NodeListOf<HTMLElement> | null>(null);
    const [data, setData] = useState<Flower[] | undefined>(undefined);
    const [active, setActive] = useState(3);

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

    const images = [
        { image: rose },
        { image: lavender },
        { image: tulip },
        { image: orchid }, 
        { image: sunflower },
        { image: hyacinth },
        { image: lily },
        { image: carnation },
    ];

    const links = [
        { link: "/rose" },
        { link: "/lavender" },
        { link: "/tulip" },
        { link: "/orchid" },
        { link: "/sunflower" },
        { link: "/hyacinth" },
        { link: "/lily" },
        { link: "/carnation" },
    ];

    useEffect(() => {
        const updateItemsRef = () => {
            itemsRef.current = document.querySelectorAll('.slider .item') as NodeListOf<HTMLElement>;
        };

        updateItemsRef();

        const loadShow = () => {
            if (!itemsRef.current) return;
            const items = itemsRef.current;

            if (!items[active]) return; // Ensure the active element exists

            items[active].style.transform = `none`;
            items[active].style.zIndex = '1';
            items[active].style.filter = 'none';
            items[active].style.opacity = '1';

            // show after
            let stt = 0;
            for (let i = active + 1; i < items.length; i++) {
                stt++;
                items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
                items[i].style.zIndex = `${-stt}`;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? '0' : '0.6';
            }
            stt = 0;
            for (let i = active - 1; i >= 0; i--) {
                stt++;
                items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
                items[i].style.zIndex = `${-stt}`;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? '0' : '0.6';
            }
        };

        loadShow();

        const next = document.getElementById('next') as HTMLElement;
        const prev = document.getElementById('prev') as HTMLElement;

        next.onclick = () => {
            setActive((prevActive) => (prevActive + 1 < itemsRef.current!.length ? prevActive + 1 : prevActive));
        };

        prev.onclick = () => {
            setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
        };

    }, [active]);

    return (
        <div className="slider relative mt-24 w-full h-[370px] overflow-hidden">
            <button id="prev" className="absolute left-12 top-1/2 transform -translate-y-1/2 text-6xl text-white font-bold opacity-50 transition-opacity duration-500 hover:opacity-100">‹</button>
            <button id="next" className="absolute right-12 top-1/2 transform -translate-y-1/2 text-6xl text-white font-bold opacity-50 transition-opacity duration-500 hover:opacity-100">›</button>
            {data && data.map((flower, index) => (
                <div
                    className="item absolute w-[200px] h-[320px] text-justify bg-white rounded-lg p-5 transition-all duration-500 left-[calc(50%-110px)] top-0"
                    key={index}
                >
                    <div className='flex flex-col space-y-4 items-center justify-center bg-white w-2/3 rounded-md p-4 drop-shadow-md'>
                        <h1 className='text-2xl text-pink-400 font-semibold'>{flower.name}</h1>
                        <img
                            src={images[index % images.length].image}
                            alt={flower.name}
                        />
                        <h2 className='text-base'>genus: {flower.genus}</h2>
                        <h3 className='text-sm bg-pink-300 rounded-sm p-1'>{flower.season}</h3>
                        <a href={links[index % links.length].link}>
                            <button className='flex bg-pink-500 text-sm items-center px-2 py-2 rounded-md text-white font-serif'>
                                take a look <LuFlower size={15} className="text-white ml-1" />
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;