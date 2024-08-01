import React from 'react';
// import './../../assets/styles/animation.css';

const Profit: React.FC = () => {

  return (
    <div className="flex">
      <div className="relative">

        <img src="phone.png" alt="Icon 1" className="mt-20 w-16 h-16 ml-48" />
        <br />
        <span className="absolute mt-[56px] ml-44 text-4xl font-bold font-sans">500M</span>
        <hr className="absolute ml-48 mt-[116px] w-16 border-t-4 border-customBackgroundButton" />
        <hr className="absolute mt-[90px] ml-80 w-24 border-t-2 rotate-90" />

        <hr className="absolute ml-48 mt-[116px] w-16 border-t-4 border-customBackgroundButton" />
        <hr className="absolute mt-[90px] ml-80 w-24 border-t-2 rotate-90" />
      </div>

      <div>
        <img src="cost-n-time.png" alt="Icon 2" className="mt-20 w-16 h-16 ml-60" />
        <br />
        <span className="absolute mt-[56px] ml-[220px] text-4xl font-bold font-sans">19000</span>
        <hr className="absolute ml-[240px] mt-[116px] w-16 border-t-4 border-customBackgroundButton" />
        <hr className="absolute mt-[90px] ml-[400px] w-24 border-t-2 rotate-90" />
      </div>

      <div>
        <img src="stats-bar-chart.png" alt="Icon 3" className="mt-20 w-16 h-16 ml-64" />
        <br />
        <span className="absolute mt-[50px] ml-[250px] text-4xl font-bold font-sans">2331</span>
        <hr className="absolute ml-[260px] mt-[116px] w-16 border-t-4 border-customBackgroundButton" />
        <hr className="absolute mt-[90px] ml-[420px] w-24 border-t-2 rotate-90" />
      </div>

      <div>
        <img src="cup-coffee.png" alt="Icon 4" className="mt-20 w-16 h-16 ml-56" />
        <br />
        <span className="absolute mt-[50px] ml-[200px] text-4xl font-bold font-sans">112260</span>
        <hr className="absolute ml-[230px] mt-[116px] w-16 border-t-4 border-customBackgroundButton" />
      </div>
    </div>
  );
}

export default Profit;
