import { NavBar,Hero,About,Footer } from "@/components"
import ImageScroll from "@/components/ImageScroll"

export default function HomePage() {
  return (
    <div>
      <Hero/>
      <ImageScroll/>
      <About/>
      <Footer/>
    </div>
  )
}
