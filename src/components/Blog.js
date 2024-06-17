import blog1 from '../assets/image 18.png'
import blog2 from '../assets/image 19.png'
import blog3 from '../assets/image 20.png'
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="p-8">
        <div className="flex flex-col justify-center items-center pb-10">
            <h2 className="text-3xl font-bold text-center pb-3">Caring is the New Marketing</h2>
            <p className="text-gray-500 text-0.5 text-center w-1/2">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>

        <div className="flex justify-center gap-16 items-center relative">
            <div>
                <div className="overflow-hidden"><img className="transform transition duration-500 hover:scale-110" src={blog1} alt="" /></div>
                <div className="bg-[#f5f7fa] p-4 rounded-2xl -bottom-28 flex flex-col justify-center items-center absolute w-1/6 ml-3 border-b-4 h-auto pt-10">
                    <h4 className="font-bold text-12 py-4 text-center border-b-2">Creating Streamlined Safeguarding Processes with OneRen</h4>
                    <p className="font-bold text-xl text-[#388e38] px-6 hover:text-[#237D31]">Read More</p>
                </div>
            </div>
            <div>
                <div className="overflow-hidden"><img className="transform transition duration-500 hover:scale-110" src={blog2} alt="" /></div>
                <div className="bg-[#f5f7fa] p-4 rounded-2xl -bottom-28 flex flex-col justify-center items-center absolute w-1/6 ml-3 border-b-4 h-auto">
                    <h4 className="font-bold text-10 py-4 text-center border-b-2">What are your safeguarding responsibilities and how can you manage them?</h4>
                    <p className="font-bold text-xl text-[#388e38] hover:text-[#237D31] px-6">Read More</p>
                </div>
            </div>
            <div>
                <div className="overflow-hidden"><img className="transform transition duration-500 hover:scale-110" src={blog3} alt="" /></div>
                <div className="bg-[#f5f7fa] p-4 rounded-2xl -bottom-28 flex flex-col justify-center items-center absolute w-1/6 ml-3 border-b-4 h-auto">
                    <h4 className="font-bold text-10 py-4 text-center border-b-2">What are your safeguarding responsibilities and how can you manage them?</h4>
                    <p className="font-bold text-xl text-[#388e38] px-6 hover:text-[#237D31]">Read More</p>
                </div>
            </div>
            
        </div>

        <div className="gap-6">
            <h1 className="text-5xl pt-56 text-center font-semibold m-6">Pellentesque suscipit fringilla libero eu.</h1>
            <div className="flex fle-row justify-center"><p className="text-center px-12 py-3 w-1/7 mx-auto rounded-2xl bg-[#388e38] text-white font-semibold flex flex-row">Get a Demo <span className="pl-2 pt-1"><FaArrowRight/></span></p></div>
        </div>
      
    </div>
  )
}

export default Blog