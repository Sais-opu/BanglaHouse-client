import React from "react";
import './Home.css';  // Make sure this CSS file is created and contains the animations
import Feedback from "../Home/Feedback.jsx";
const images = [
    "https://i.ibb.co/gZFPxX8Z/barisal2.jpg",
    "https://i.ibb.co/6RD7t6LV/Rangpur1.jpg",
    "https://i.ibb.co/LhnrCyb9/dhaka1.jpg",
    "https://i.ibb.co/C5drJH71/Mymensingh1.jpg",
    "https://i.ibb.co/DH9nLVHS/Khulna2.jpg",
    "https://i.ibb.co/WWVLMv5z/sylhet2.jpg",
    "https://i.ibb.co/9kpPQknF/dhaka2.jpg",
    "https://i.ibb.co/MkG1v7w8/Rajshahi2.jpg",
    "https://i.ibb.co/FGSzfc9/Rangpur2.jpg",
    "https://i.ibb.co/dJsHJdJf/sylhet1.jpg",
    "https://i.ibb.co/cdGWGhG/chattogram1.jpg",
    "https://i.ibb.co/x8HyX2VY/barisal1.jpg",
];

const group1 = images.slice(0, 4);
const group2 = images.slice(4, 8);
const group3 = images.slice(8, 12);

const AnimationRow = ({ imgs, direction = "left" }) => {
    const animationClass = direction === "left" ? "scroll-left" : "scroll-right";

    return (
        <div className="overflow-hidden whitespace-nowrap my-4">
            <div className={`inline-flex space-x-6 ${animationClass}`} style={{ willChange: "transform" }}>
                {[...imgs, ...imgs].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`img-${i}`}
                        className="w-60 h-35 object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            {/* Banner Section */}
            <div
                className="min-h-screen flex items-center justify-center bg-cover bg-center relative py-10"
                style={{ backgroundImage: "url('https://i.ibb.co/xqDCY64y/banner.jpg')" }}
            >
                <div className="absolute inset-0 text-black bg-opacity-50"></div>
                <div className="relative z-10 text-center text-black px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Divison-Wise House Demand Visualizer
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Explore housing demand, average rent, and listing insights across all
                        divisions of Bangladesh. Make smarter real estate decisions using
                        dynamic charts and data.
                    </p>
                </div>
            </div>

            {/* Image slider BELOW banner, with title + description */}
            <div className="bg-gray-100 p-6">
                <div className="mb-6 text-center">
                    <h2 className="text-3xl font-semibold mb-2">Check your favourite house</h2>
                    <p className="text-gray-700 max-w-xl mx-auto">
                        Visual representation of house demands and listings across different divisions of Bangladesh.
                    </p>
                </div>

                <AnimationRow imgs={group1} direction="left" />
                <AnimationRow imgs={group2} direction="right" />
                <AnimationRow imgs={group3} direction="left" />
            </div>

            <Feedback></Feedback>
        </>
    );
};

export default Home;
