import comm1 from '../assets/comm1.png'
import comm2 from '../assets/comm2.png'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'

const Community = () => {
  return (
    <div>
        <div className="flex justify-evenly items-center p-16 gap-24">
            <div>
                <img src={comm1} alt="" />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                <h3 className="text-3xl font-bold ">The unseen of spending three years at Pixelgrade</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni officia tempora accusamus obcaecati totam laborum omnis quo nulla saepe fugit ab eveniet consequatur temporibus eum veritatis ullam commodi, nam deleniti laboriosam. Assumenda, omnis ea quia tempora praesentium nihil eligendi.</p>
                <button className="px-8 py-3 rounded-2xl bg-[#43a046] text-white font-semibold w-1/4">Learn More</button>
            </div>
        </div>

        <div className="p-24 bg-[#f5f7fa] flex justify-around items-center">
            <div className="w-1/3">
                <h3 className="font-bold text-3xl text-gray-900">Helping a local business <span className="text-[#2bcb8b]"> reinvent itself </span></h3>
                <p className="text-6">We reached here with our hard work and dedication</p>
            </div>

            <div className="flex justify-between items-center">

            <div className="flex flex-col gap-3 ">
                <div className="flex justify-around items-center w-1/3">
                    <div><img src={b1} alt="" /></div>
                    <div>
                        <h3 className="text-2xl font-bold">2,245,341</h3>
                        <p className="text-gray-700 text-4">Memberships</p>
                    </div>
                </div>
                <div className="flex justify-around items-center w-1/3">
                    <div><img src={b2} alt="" /></div>
                    <div>
                        <h3 className="text-2xl font-bold">3,245,755</h3>
                        <p className="text-gray-700 text-4">Clubs</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex  items-center w-1/2">
                    <div><img src={b3} alt="" /></div>
                    <div>
                        <h3 className="text-2xl font-bold">1,987,031</h3>
                        <p className="text-gray-700 text-4">Event Bookings</p>
                    </div>
                </div>
                <div className="flex justify-around items-center w-1/3">
                    <div><img src={b4} alt="" /></div>
                    <div>
                        <h3 className="text-2xl font-bold">348,698</h3>
                        <p className="text-gray-700 text-4">Payments</p>
                    </div>
                </div>
            </div>

            </div>

            
            
        </div>

        <div className="flex justify-evenly items-center p-16 gap-24">
            <div>
                <img src={comm2} alt="" />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                <h3 className="text-3xl font-bold ">How to design your site footer like we did</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni officia tempora accusamus obcaecati totam laborum omnis quo nulla saepe fugit ab eveniet consequatur temporibus eum veritatis ullam commodi, nam deleniti laboriosam. Assumenda, omnis ea quia tempora praesentium nihil eligendi.</p>
                <button className="px-8 py-3 rounded-2xl bg-[#43a046] text-white font-semibold w-1/4">Learn More</button>
            </div>
        </div>
      
    </div>
  )
}

export default Community
