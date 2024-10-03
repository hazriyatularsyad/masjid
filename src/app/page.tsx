import Carousel from "./components/carousel"
import Content from "./components/content/page"
import Footer from "./components/footer"

import Navbar from "./components/navbar"

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <Carousel />
      <Content />
      <Footer/>
    </div>
  )
}
