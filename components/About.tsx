import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="w-full relative h-screen bg-gray-400 flex justify-center px-10"
    >
      <Image
        className="absolute w-full h-full opacity-[0.5] z-0"
        src="/firstBanner.jpg"
        alt="about"
        width={1440}
        height={100}
      />
      <div className="flex flex-col z-10 items-center gap-14 py-10">
        <h1
          className="text-black text-7xl underline"
          style={{ textShadow: "2px 2px 1px white" }}
        >
          About
        </h1>
        <div>
        <p className="text-black text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          perferendis ipsam quos doloremque unde natus vitae animi porro!
        </p>
        <p className="text-black text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          perferendis ipsam quos doloremque unde natus vitae animi porro!
          Eveniet tempora velit quaerat sit earum eos iure facere
        </p>
        </div>
      </div>
    </div>
  );
}
