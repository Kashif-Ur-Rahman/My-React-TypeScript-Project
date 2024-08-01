import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faBasketballBall, faHome, faPhone, faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <div className="bg-customBackgroundBlack text-white py-10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="text-center md:text-left">
                        <img src="light-logo.png" alt="Logo" className=" w-44 mb-4 mx-auto md:mx-0" />
                        <p className="mb-4 font-extralight text-lg opacity-60">
                            Agency is a WordPress theme that is truly multi-purpose with our way of taking care of your needs.
                        </p>
                        <p className="mb-4 font-extralight text-lg opacity-60">
                            The barrage of shortcodes that works in the pages, makes it the better choice for your business.
                        </p>

                        {/* Stay Connected */}
                        <h3 className="font-bold mb-4 mt-10 tracking-widest opacity-60">STAY CONNECTED</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="opacity-70 hover:opacity-100">
                                <FontAwesomeIcon icon={faFlagCheckered} />
                            </a>
                            <a href="#" className="opacity-70 hover:opacity-100">
                                <FontAwesomeIcon icon={faBasketballBall} />
                            </a>
                            <a href="#" className="opacity-70 hover:opacity-100">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="text-center md:text-left">
                        <hr className="w-10 border-t-4 border-customBackgroundButton mx-auto md:mx-0" />
                        <h3 className="text-3xl mb-4">Useful Links</h3>
                        <ul className="mt-8 space-y-6">
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-60 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">Home</a>
                            </li>
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-70 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">Company News</a>
                            </li>
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-60 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">About Us</a>
                            </li>
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-60 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">Projects</a>
                            </li>
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-60 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">Careers</a>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Links */}
                    <div className="text-center md:text-left">
                        <ul className="mt-8 space-y-6">
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-60 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">Contact Us</a>
                            </li>
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-60 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">Legal Support</a>
                            </li>
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-60 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">Give us feedback</a>
                            </li>
                            <li className="flex items-center font-sans text-xl opacity-60">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2 opacity-60 hover:opacity-100 cursor-pointer" />
                                <a href="#" className="opacity-70 hover:opacity-100">Talk to us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="text-center md:text-left">
                        <hr className="w-10 border-t-4 border-customBackgroundButton mx-auto md:mx-0" />
                        <h3 className="text-3xl mb-4">Contact Us</h3>
                        <div className="flex items-center justify-center md:justify-start mb-6">
                            <FontAwesomeIcon icon={faHome} className="text-xl mr-2" />
                            <p className="text-lg opacity-70">71 Pilgrim Avenue, Chevy Chase, MD 20815</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start mb-6">
                            <FontAwesomeIcon icon={faPhone} className="text-xl mr-2" />
                            <p className="text-lg opacity-70">(226) 906-2721 <br />(671) 925-1352</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" />
                            <p className="text-lg opacity-70 hover:opacity-100 cursor-pointer">info@agency.com</p>
                        </div>
                    </div>
                </div>

                <hr className="w-full border-t-1 opacity-60 mt-10" />

                <div className="flex flex-col md:flex-row items-center justify-center text-center mt-4">
                    <p className="flex items-center">
                        <span className="mr-1 text-lg opacity-70">Copyright©</span>
                        <span className="mr-1 text-lg opacity-70">2017,</span>
                    </p>
                    <a href="#" className="text-lg opacity-70 hover:opacity-100 mx-2">DesignThemes</a>
                    <div className="flex items-center justify-center space-x-2">
                        <a href="#" className="text-lg opacity-70 hover:opacity-100 mx-2">Privacy Policy</a><span>|</span>
                        <a href="#" className="text-lg opacity-70 hover:opacity-100 mx-2">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
