import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full h-14 bg-white flex justify-between items-center px-4">
        <div className="logo">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo.png"
          alt="Logo"
          width={110}
          height={35}
        />
        </div>
        <div className="w-3/4 flex justify-around text-black text-lg">
            <Link href='#hero'>Home</Link>
            <Link href='#about'>About</Link>
            <Link href='#footer'>Contact</Link>
        </div>
    </nav>
  )
}