import logomain from '../assets/mainlogo.png'
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white mx-8 my-4 flex justify-between">
        <div className="mx-4">
            <div className="flex items-center"><img src={logomain} alt="" /><span className="text-2xl font-semibold p-2">NEXCENT</span></div>
        </div>
        <div className="flex gap-12 items-center mx-8 justify-center ">
            <a href=""><h4 className="font-medium text-1xl hover:border-b-2">Home</h4></a>
            <a href=""><h4 className="font-medium text-1xl hover:border-b-2">Features</h4></a>
            <a href=""><h4 className="font-medium text-1xl hover:border-b-2">Community</h4></a>
            <a href=""><h4 className="font-medium text-1xl hover:border-b-2">Blogs</h4></a>
            <a href=""><h4 className="font-medium text-1xl hover:border-b-2">Pricing</h4></a>
            <div className="flex " ><h4 className="bg-[#43a046] px-5 py-2 rounded-2xl font-semibold hover:text-white hover:bg-[#317633] flex flex-row">Register Now <span className="pl-2 pt-1"><FaArrowRight/></span></h4></div>
        </div>
       
    </div>
  )
}

export default Navbar
