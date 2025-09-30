import React, { useState } from 'react';


const slides = [
    {
        image: "https://i.ibb.co.com/5grfQ0FX/city.webp",
        title: "Join the City Marathon 2025",
        subtitle: "Push your limits and run with thousands of passionate athletes."
    },
    {
        image: "https://i.ibb.co.com/4gPHMMtN/sprinter-running-fast-royalty-free-image-865688236-1553096499.jpg",
        title: "Registration Open Now",
        subtitle: "Secure your spot before the deadline and be part of something big."
    },
    {
        image: "https://i.ibb.co.com/XfYCSxh0/track.jpg",
        title: "Race Day: October 25, 2025",
        subtitle: "Get ready for an unforgettable marathon experience in Dhaka."
    }
];

const Banner = () => {
    const [current, setCurrent] = useState(0);


    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };


    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg m-4 mx-auto">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                            {slides[current].title}
                        </h2>
                        <p className="mt-2 text-lg text-gray-200 max-w-2xl">
                            {slides[current].subtitle}
                        </p>
                    </div>
                </div>


            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
            >
                ›
            </button>


            {/* Slide indicators */}
            <div className="absolute bottom-4 flex justify-center w-full space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Banner;