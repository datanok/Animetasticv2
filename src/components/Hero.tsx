"use client"
import React from 'react'
import { Carousel, type CarouselApi } from "@/components/ui/carousel"
import {

    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots
} from "@/components/ui/carousel"
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';


interface Slide {
    url: string;
    text: string;
    info: string;
    link: string;
}
export function Hero() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const slides: Slide[] = [
        {
            url: "https://images8.alphacoders.com/133/thumb-1920-1336966.jpeg",
            text: "Jujutsu Kaisen.",
            info: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
            link: "/search/40748",
        },
        {
            url: "https://images8.alphacoders.com/136/thumb-1920-1363709.png",
            text: "2nd slide.",
            info: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
            link: "/search/40748",
        },
        {
            url: "https://images3.alphacoders.com/136/thumb-1920-1363708.png",
            text: "3rd.",
            info: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
            link: "/search/40748",
        },
        {
            url: "https://images6.alphacoders.com/112/1120777.jpg",
            text: "4th.",
            info: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
            link: "/search/40748",
        },

    ];


    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api])

    return (
        <>

            <Carousel setApi={setApi} plugins={[
                Autoplay({
                    delay: 8000,
                }),
            ]} >
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="flex flex-col  h-[40vh] md:h-[60vh] backdrop-filter brightness-100 bg-center bg-cover duration-500 background-blend-mode: multiply"
                                style={{ backgroundImage: `url(${slide.url})` }}
                            >
                                <div className="w-[100%] h-full  pl-4 bg-gradient-to-t from-[#111111] to:transparent">
                                    <div className="mt-4 flex flex-col gap-2 absolute bottom-4">
                                        <h1 className="sm:text-lg md:text-3xl font-bold text-white text-center md:text-start ">{slide.text}</h1>
                                        <p className="w-full sm:relative md:w-[40%] text-sm text-ellipsis mt-3 lg:text-lg text-left text-gray-200">
                                            {slide.info}
                                        </p>
                                        <Link href={slide.link}>
                                            <span className="mb-4  text-sm font-semibold bg-white/20 backdrop-blur-sm backdrop-brightness-150 backdrop-saturate-150 p-2 rounded-full text-white">
                                                Read More
                                            </span>
                                        </Link>
                                    </div>
                                  
                                </div>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselDots />
            </Carousel>
         
        </>
    )
}
