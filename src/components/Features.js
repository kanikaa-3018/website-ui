import logo from '../assets/Logo.png'
import logo1 from '../assets/Logo-1.png'
import logo2 from '../assets/Logo-2.png'
import logo3 from '../assets/Logo-3.png'
import logo4 from '../assets/Logo-4.png'
import logo5 from '../assets/Logo-5.png'
import logo6 from '../assets/Logo-6.png'
import icon from '../assets/Icon.png'
import icon1 from '../assets/Icon-1.png'
import icon2 from '../assets/Icon-2.png'

const Features = () => {
  return (
    <div className="py-16">
        <div className="flex  w-full flex-col gap-2">
            <h3 className="text-4xl font-semibold items-center mx-auto">Our clients</h3>
            <p className="mx-auto">We have been working with some Fortune 500+ clients</p>
            <div className="flex items-center justify-evenly pt-8 ">
                <img className="hover:border-2 p-2 rounded-lg" src={logo} alt="" />
                <img className="hover:border-2 p-2 rounded-lg" src={logo1} alt="" />
                <img className="hover:border-2 p-2 rounded-lg" src={logo2} alt="" />
                <img className="hover:border-2 p-2 rounded-lg" src={logo3} alt="" />
                <img className="hover:border-2 p-2 rounded-lg" src={logo4} alt="" />
                <img className="hover:border-2 p-2 rounded-lg" src={logo5} alt="" />
                <img className="hover:border-2 p-2 rounded-lg" src={logo6} alt="" />
            </div>

        </div>

        <div className="flex flex-col items-center justify-center mt-24 mb-4">
            <h3 className="font-bold text-4xl w-2/5 text-center">Manage your entire community in a single system</h3>
            <p className="p-4">Who is Nextcent suitable for?</p>
        </div>
        <div className="flex justify-evenly items-center my-6">
            <div className="flex gap-4 flex-col items-center px-4 h-auto w-auto border-slate-800">
                <img className="w-1/10 bg-[#e8f5e9] rounded-tr-2xl rounded-bl-2xl p-2" src={icon} alt="" />
                <h3 className="text-2xl font-bold ">Membership Organisations</h3>
                <p className="text-0.5 text-center w-1/2">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="flex gap-4 flex-col items-center px-4">
                <img className="w-1/10 bg-[#e8f5e9] rounded-tr-2xl rounded-bl-2xl p-2" src={icon1} alt="" />
                <h3 className="text-2xl font-bold">National Associations</h3>
                <p className="text-0.5 text-center w-1/2">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="flex gap-4 flex-col items-center justify-center px-4">
                <img className="w-1/10 bg-[#e8f5e9] rounded-tr-2xl rounded-bl-2xl p-2"  src={icon2} alt="" />
                <h3 className="text-2xl font-bold">Clubs And Groups</h3>
                <p className="text-0.5 text-center w-1/2">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
      
    </div>
  )
}

export default Features
