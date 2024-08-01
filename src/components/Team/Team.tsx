import React from "react";

const Team: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-customBackground h-[960px] w-full mt-[2220px] py-10">
      <p className="font-medium opacity-75 text-xl mb-5 tracking-widest">THE SHOWRUNNERS</p>
      <h2 className=" font-bold text-7xl mb-10">Perfect Team</h2>

      <div className="grid grid-cols-3 gap-24 mt-16">
        {/* Box 1 */}
        <div className="bg-white shadow-lg rounded-lg p-14 flex flex-col items-center w-[350px] h-[480px] group relative overflow-hidden">
          {/* Hover Effect Background */}
          <div className="absolute top-0 left-0 w-full h-32 bg-customBackgroundButton opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>

          {/* Circle Background */}
          <div className="relative w-44 h-44 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-4 group-hover:border-customBackgroundAnimation z-10">
            <img src="Jeff-Norton.jpg" alt="Team Member 1" className="w-40 h-40 object-cover rounded-full" />
          </div>

          <h3 className="text-4xl font-bold mb-2 z-10">Jeff Norton</h3>
          <h5 className="text-center text-lg font-medium tracking-widest opacity-70 z-10">BUSINESS ANALYST</h5>
          <hr className="transition-all duration-300 ease-in-out mt-4 w-20 border-t-4 border-customBackgroundButton group-hover:w-12 z-10" />
          <p className="text-center font-normal opacity-70 mt-4 text-lg z-10">Mirum est notare quam littera gothica, quam putamus.</p>
        </div>




        {/* Box 2 */}
        <div className="bg-white shadow-lg rounded-lg p-14 flex flex-col items-center w-[350px] h-[480px] group relative overflow-hidden">
          {/* Hover Effect Background */}
          <div className="absolute top-0 left-0 w-full h-32 bg-customBackgroundButton opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>

          {/* Circle Background */}
          <div className="relative w-44 h-44 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-4 group-hover:border-customBackgroundAnimation z-10">
            <img src="Anita-Allen.jpg" alt="Team Member 2" className="w-40 h-40 object-cover rounded-full" />
          </div>

          <h3 className="text-4xl font-bold mb-2 z-10">Anita Allen</h3>
          <h5 className="text-center text-lg font-medium tracking-widest opacity-70 z-10">MARKETING RESEARCH</h5>
          <hr className="transition-all duration-300 ease-in-out mt-4 w-20 border-t-4 border-customBackgroundButton group-hover:w-12 z-10" />
          <p className="text-center font-normal opacity-70 mt-4 text-lg z-10">Mirum est notare quam littera gothica, quam putamus.</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white shadow-lg rounded-lg p-14 flex flex-col items-center w-[350px] h-[480px] group relative overflow-hidden">
          {/* Hover Effect Background */}
          <div className="absolute top-0 left-0 w-full h-32 bg-customBackgroundButton opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>

          {/* Circle Background */}
          <div className="relative w-44 h-44 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-4 group-hover:border-customBackgroundAnimation z-10">
            <img src="Sonja-Summers.jpg" alt="Team Member 3" className="w-40 h-40 object-cover rounded-full" />
          </div>

          <h3 className="text-3xl font-bold mb-2 z-10">Sonja Summers</h3>
          <h5 className="text-center text-lg font-medium tracking-widest opacity-70 z-10">DIGITAL ANALYST</h5>
          <hr className="transition-all duration-300 ease-in-out mt-4 w-20 border-t-4 border-customBackgroundButton group-hover:w-12 z-10" />
          <p className="text-center font-normal opacity-70 mt-4 text-lg z-10">Mirum est notare quam littera gothica, quam putamus.</p>
        </div>



      </div>
    </div>
  );
}

export default Team;
