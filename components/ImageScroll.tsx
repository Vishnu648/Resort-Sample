"use client";

import SimpleImageSlider from "react-simple-image-slider";

export default function ImageScroll() {
  const images = [
    {
      url: "/firstBanner.jpg",
    },
    {
      url: "/secondBanner.jpg",
    },
    { url: "/thirdBanner.jpg" },
  ];

  return (
    <div className="h-[500px] md:h-[300px] bg-slate-300 flex flex-col md:flex-row justify-around items-center">
      <SimpleImageSlider
        width={356}
        height={204}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlayDelay={3}
        style={{ padding: "0", objectFit: "cover" }}
      />
       <SimpleImageSlider
        width={356}
        height={204}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3}
        style={{ padding: "0", objectFit: "cover" }}
      />
    </div>
  );
}
