import hero from '../assets/home.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <Carousel className="bg-[#f5f7fa] w-full h-auto px-8 py-12 duration-100">
      <div className="flex justify-between items-center">
        <div className=" gap-8 flex flex-col items-center">
            <h1 className="text-6xl font-bold ">Lessons and insights <span className="text-[#28cb8b]">from 8 years</span></h1>
            <p className="text-2xl">Where to grow your business as a photographer: site or social media?</p>
            <button className="px-8 py-2 bg-[#2bcb8b] rounded-2xl text-white text-2xl font-semibold w-1/4">Register</button>
        </div>
        <div className="flex px-16">
        <img src={hero} alt="" />
        </div>
      </div>
      <div>
      <div className="flex justify-between items-center">
        <div className=" gap-8 flex flex-col items-center">
            <h1 className="text-6xl font-bold ">Lessons and insights <span className="text-[#28cb8b]">from 8 years</span></h1>
            <p className="text-2xl">Where to grow your business as a photographer: site or social media?</p>
            <button className="px-8 py-2 bg-[#2bcb8b] rounded-2xl text-white text-2xl font-semibold w-1/4">Register</button>
        </div>
        <div className="flex px-16">
        <img src={hero} alt="" />
        </div>
      </div>
      </div>
      <div>
      <div className="flex justify-between items-center">
        <div className=" gap-8 flex flex-col items-center">
            <h1 className="text-6xl font-bold ">Lessons and insights <span className="text-[#28cb8b]">from 8 years</span></h1>
            <p className="text-2xl">Where to grow your business as a photographer: site or social media?</p>
            <button className="px-8 py-2 bg-[#2bcb8b] rounded-2xl text-white text-2xl font-semibold w-1/4">Register</button>
        </div>
        <div className="flex px-16">
        <img src={hero} alt="" />
        </div>
      </div>
      </div>
    </Carousel>
    
 

  )
}

export default Hero
