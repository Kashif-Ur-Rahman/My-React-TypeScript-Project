import React from "react";

const Services2: React.FC = () => {
    return (
        <div className="relative flex">
            <div className="grid grid-cols-3 mt-10">
                {/* Box 1 */}
                <div className="bg-customBackgroundColor shadow-lg rounded-lg p-6 flex flex-row items-center hover:bg-slate-300 w-[445px] h-[410px]">
                    <img src="icon-question.png" alt="Service 1" className="w-24 h-24 object-cover mb-4 mx-auto" />
                    <div className="flex flex-col justify-center">
                        <h3 className="text-4xl font-sans mb-2 ml-4">
                            Get your
                            <br /> <strong>Clarifications</strong>
                        </h3>
                        <p className="text-lg font-normal opacity-60 ml-4">
                            Using our 24/7 knowledgebase, forum & comments get clarified.
                        </p>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="bg-customBackgroundColor shadow-lg rounded-lg p-6 flex flex-row items-center hover:bg-slate-300 w-[445px] h-[430px]">
                    <img src="icon-support.png" alt="Service 2" className="w-24 h-24 object-cover mb-4 mx-auto" />
                    <div className="flex flex-col justify-center">
                        <h3 className="text-4xl font-sans mb-2 ml-8">
                            Legendary
                            <br /> <strong>Support</strong>
                        </h3>
                        <p className="text-lg font-normal opacity-60 ml-8">
                            Get your doubts cleared using our email support, phone or knowledgebase.
                        </p>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="bg-customBackgroundColor shadow-lg rounded-lg p-6 flex flex-row items-center hover:bg-slate-300 w-[445px] h-[410px]">
                    <img src="icon-package.png" alt="Service 3" className="w-24 h-24 object-cover mb-4 mx-auto" />
                    <div className="flex flex-col justify-center ml-6">
                        <h3 className="text-4xl font-sans mb-2">
                            Maintenance
                            <br /> <strong>Package</strong>
                        </h3>
                        <p className="text-lg font-normal opacity-60">
                            We offer annual maintenance packages for different needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services2;
