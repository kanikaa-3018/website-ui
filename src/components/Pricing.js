import pricing from '../assets/pricing.png'
import logo from '../assets/Logo.png'
import logo1 from '../assets/Logo-1.png'
import logo2 from '../assets/Logo-2.png'
import logo3 from '../assets/Logo-3.png'
import logo4 from '../assets/Logo-4.png'
import logo5 from '../assets/Logo-5.png'


const Pricing = () => {
  return (
    <div className="bg-[#f5f7fa] h-auto px-16 py-12 flex items-center justify-around">
        <div className="w-1/3"><img src={pricing} alt="" /></div>
        <div className="w-2/3">
            <p className="text-1xl">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h2 className="text-[#43A046] font-bold pt-2">Tim Smith</h2>
            <p className="text-slate-500">British Dragon Boat Racing Association</p>
            <div className="flex items-center justify-around gap-3 pt-5">
            <img src={logo} alt="" />
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
         
            <p className="text-[#43A046] font-semibold">Meet All Customers</p>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing
