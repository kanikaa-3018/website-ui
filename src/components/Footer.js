import mainlogo from '../assets/mainlogo.png'
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";



const Footer = () => {
  return (
    <div className="bg-[#263238] h-auto py-20 px-20 mt-8 flex items-center justify-between">
        <div className="w-1/2 flex flex-col items-center gap-7">
            <div className="flex gap-4"><img src={mainlogo} alt="" /><span className="text-white font-bold text-3xl">NEXCENT</span></div>
            <div className="text-white text-0.75 w-72 pl-9">Copyright © 2024 Kanika's Landify UI Kit. 
            All rights reserved.
            </div>
            <div className="flex ">
            <a className="text-white p-2 bg-slate-600 rounded-xl mx-2" href=""><FaInstagram/></a>
            <a className="text-white p-2 bg-slate-600 rounded-xl mx-2" href=""><FaYoutube/></a>
            <a className="text-white p-2 bg-slate-600 rounded-xl mx-2" href=""><FaTwitter/></a>
            <a className="text-white p-2 bg-slate-600 rounded-xl mx-2" href=""><RiGlobalLine/></a>
            </div>
        </div>
        <div className="flex items-center gap-9 w-1/2 ml-56">
            <div className="flex flex-col gap-2 text-white">
                <h5 className="font-bold text-white text-2xl">Company</h5>
                <p >About us</p>
                <p>Blog</p>
                <p>Contact us</p>
                <p>Pricing</p>
                <p>Testimonials</p>
            </div>
            <div className="flex flex-col gap-2 text-white">
                <h5 className="font-bold text-white text-2xl">Support</h5>
                <p>About us</p>
                <p>Blog</p>
                <p>Contact us</p>
                <p>Pricing</p>
                <p>Testimonials</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-white text-2xl">Stay Up to Date</h3>
                <div className="text-gray text-1xl bg-[#89939e] px-10 py-2 rounded-2xl flex font-semibold">Email Address <span className="text-white pt-1 pl-2"><IoIosSend/></span></div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
