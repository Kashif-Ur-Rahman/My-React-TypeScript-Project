import React from "react";


const Services: React.FC = () => {
    return (
        <div className="relative">
            <div className="absolute mt-80">
                <p className=" font-bold text-lg ml-[510px] tracking-widest opacity-60">ALL THESE SERVICES FOR YOU</p>
                <h2 className="font-bold mt-6 text-7xl ml-[370px]">The Best Services</h2>

                <div className="grid grid-cols-3 gap-0 mt-10 ml-8">
                    {/* Box 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center text-center hover:bg-slate-400 w-[420px] h-[430px]">
                        <img src="icon-stats-counter.png" alt="Service 1" className="w-28 h-28 object-cover mb-4 mx-auto" />
                        <h3 className="text-4xl font-sans mb-2">Track
                            <br />  <strong>Record</strong> </h3>
                        <p className="text-center text-xl font-extralight">Consistent track record of clients both big <br />and SMEs</p>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center text-center hover:bg-slate-400 w-[420px] h-[430px]">
                        <img src="icon-analyze.png" alt="Service 2" className="w-28 h-28 object-cover mb-4 mx-auto" />
                        <h3 className="text-4xl font-sans mb-2">Exponential
                            <br />  <strong> Growth</strong> </h3>
                        <p className="text-center text-xl font-extralight">Our recommendations ensures rapid <br /> expansion of business.</p>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center text-center hover:bg-slate-400 w-[420px] h-[430px]">
                        <img src="icon-video-play.png" alt="Service 3" className="w-28 h-28 object-cover mb-4 mx-auto" />
                        <h3 className="text-4xl font-sans mb-2">Brand
                            <br />  <strong>Equity</strong> </h3>
                        <p className="text-center text-xl font-extralight">The brands have exceptional premium <br /> value of equity</p>
                    </div>

                    {/* Box 4 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center text-center hover:bg-slate-400 w-[420px] h-[430px]">
                        <img src="icon-edit-cogs.png" alt="Service 4" className="w-28 h-28 object-cover mb-4 mx-auto" />
                        <h3 className="text-4xl font-sans mb-2">Trusted
                            <br />  <strong>by leaders</strong> </h3>
                        <p className="text-center text-xl font-extralight">The leaders' trust in us empowers our operations.</p>
                    </div>

                    {/* Box 5 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center text-center hover:bg-slate-400 w-[420px] h-[430px]">
                        <img src="icon-certified-batch.png" alt="Service 5" className="w-28 h-28 object-cover mb-4 mx-auto" />
                        <h3 className="text-4xl font-sans mb-2">Diverse
                            <br />  <strong>Portfolio</strong> </h3>
                        <p className="text-center text-xl font-extralight">Our range of clients encompasses the big <br /> & the small.</p>
                    </div>

                    {/* Box 6 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center text-center hover:bg-slate-400 w-[420px] h-[430px]">
                        <img src="icon-zoom-eye.png" alt="Service 6" className="w-28 h-28 object-cover mb-4 mx-auto" />
                        <h3 className="text-4xl font-sans mb-2">Pioneers
                            <br />  <strong>in Consultancy</strong> </h3>
                        <p className="text-center text-xl font-extralight">We pioneered the agency concept by <br /> launching our own unit.</p>
                    </div>
                </div>


                {/* Block-B */}

                <div className=" relative flex mt-10">
                    <p className=" absolute text-xl font-medium opacity-60 tracking-widest ml-32 mt-28">BUILDING RELATIONSHIPS</p>

                    <h3 className="text-4xl font-bold font-sans mt-40 ml-32 ">How you can save time & <br /> money in your Business</h3>

                    <p className=" absolute text-lg font-normal opacity-60 ml-32 mt-[280px]">You don't have to reinvent the wheels, right? When you <br /> entrust the task of launching a strategy for your latest <br /> marketing campaign, you would get many time tested <br /> modules that have delivered consistently across different <br /> industries.</p>

                    {/* <button className="relative bg-customBackgroundButton text-white px-10 py-4 rounded overflow-hidden hover:bg-indigo-900 button-border-hover">
          Consult Now
        </button> */}
                    <button className=" absolute mt-[460px] ml-32 text-white bg-customBackgroundButton overflow-hidden  px-11 py-4 hover:bg-indigo-900 ">Consult Now</button>

                    <div className=" flex absolute border-8  border-customBackgroundButton mt-28 ml-[700px] w-[564px] h-[550px] z-10 "></div>

                    <img src="about-agency.jpg" alt="" className=" mt-44 ml-16 w-[580px] h-[420px] z-20 shadow-xl shadow-black" />


                </div>
            </div>

        </div>
    );
}

export default Services;
