import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Digital Marketer</span>
          <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-cyan-400">Shirish Shrestha</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            Self motivated individual, passionate about learning and eager to tackle new challenges in the tech world. Committed on growing both technically and personally, with a focus on building confidence and enjoying the process of learning and discovery. Looking forward to contributing to meaningful projects while continuously improving and making a positive impact.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/cvSeeres.pdf" download>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0"><Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-cyan-500 rounded-full flex justify-center items-center text-cyan-400 text-base hover:bg-cyan-500 hover:text-primary hover:transition-all duration-500"/></div>
            </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>
        </div>
      </div>
      <Stats/>
      </section>
  )
}

export default Home