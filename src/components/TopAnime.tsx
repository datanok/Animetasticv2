"use client";
import React, { useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useStore } from "@/zustandStore/Store";
import Autoplay from 'embla-carousel-autoplay';



function TopAnime() {
    const { execute, topAnime, loading, error } = useStore(state => ({
        execute: state.execute,
        topAnime: state.topAnime,
        loading: state.loading,
        error: state.error
    }));
    useEffect(() => {
        execute();
    }, []);
    if (loading === false && topAnime?.data?.length === 0) {
        return null
    }
    if (loading) {
        return <div className="relative  mx-16">
            <Carousel opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent className="m-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem
                            className="flex-shrink-0 md:basis-1/4 p-2 animate-pulse"
                        >
                            <div
                                className="h-40 w-72 bg-gray-200 rounded-lg"
                            >
                            </div>

                            <div className="h-2 bg-slate-400 mt-4 mx-auto w-[80%]"></div>
                        </CarouselItem>

                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    }
    return (
        <>
            <h1 className=" text-white text-2xl mx-8">Top Anime</h1>
            <div className="relative  mx-6">
                <Carousel opts={{
                    align: "start",
                    loop: true,
                }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}>
                    <CarouselContent className="m-2">
                        {false && topAnime && topAnime?.data?.length === 0 && <h1 className="text-center text-white text-2xl">No Anime Found</h1>}
                        {loading === false && topAnime?.data?.map((item: any, index: number) => (
                            <CarouselItem
                                key={index}
                                className="flex-shrink-0 md:basis-1/5 p-2"
                            >

                                <img
                                    src={item.node.main_picture.large}
                                    alt={item.node.title}
                                    className="h-40 w-72 object-cover rounded-lg"
                                />

                                <h3 className="text-white text-md font-bold mt-2">{item.node.title}</h3>
                            </CarouselItem>

                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                <CarouselNext /> */}
                </Carousel>
            </div>
        </>
    );
}

export default TopAnime;
