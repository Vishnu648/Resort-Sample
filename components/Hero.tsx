"use client"

import React, { useState, useEffect } from "react";

export default function Hero() {

    const imageUrls = [
        "/firstBanner.jpg",
        "/secondBanner.jpg",
        "/thirdBanner.jpg"
      ]; // Add more image URLs as needed
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [currentImageUrl, setCurrentImageUrl] = useState(imageUrls[0]);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    
      useEffect(() => {
        setCurrentImageUrl(imageUrls[currentImageIndex]);
      }, [currentImageIndex, imageUrls]);

      
  return (
    <div id='hero' className="w-full h-[620px] lg:h-[700px] relative flex justify-center bg-white">
        <img
        src={currentImageUrl}
        style={{ borderRadius: "0 0 12px 12px", aspectRatio:21/9}}
        alt="Image"
        width="100%"
        className="heroImage md:h-[500px] h-[350px] absolute"
      />
      <div className="absolute flex flex-col items-center text-black bg-gray-400 md:bg-opacity-[0.6] rounded-xl px-4 py-1 justify-center md:top-[380px] top-[280px] w-3/4">
        <p>Welcome</p>
        <p>To</p>
        <h2 style={{textShadow:"1px 1px 2px white"}}>Tamaara Beach Resort</h2>
      </div>
      <div className="flex flex-col w-3/4 rounded-3xl h-24 p-3 items-center absolute mb-10 bottom-12">
        <span className="text-orange-500 text-3xl" style={{textShadow:"2px 2px 3px black"}}>For Booking contact us on:</span>
        <span className="text-orange-500 text-6xl" style={{textShadow:"2px 2px 3px black"}}>0000000000</span>
      </div>
    </div>
  )
}
