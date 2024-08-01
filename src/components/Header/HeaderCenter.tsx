import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faCartShopping, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const HeaderCenter: React.FC = () => {
    return (
        <div className="headercenter">
            <nav>
                <header className="bg-customBackgroundCenter sticky top-0 z-20 flex flex-col md:flex-row w-full items-center justify-between border-b border-gray-500 py-2 md:py-4 px-4">
                    <div className="flex items-center space-x-2 ml-0 md:ml-14">
                        <a href="#" className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                            <span className="text-white">info@example.com</span>
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 text-white pr-0 md:pr-12 mt-2 md:mt-0">
                        <a href="#" className="flex items-center space-x-2 opacity-100 hover:opacity-60">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="font-sans text-lg cursor-pointer">Branches</span>
                        </a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="flex items-center space-x-2 opacity-100 hover:opacity-60">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="font-sans text-lg cursor-pointer">Store</span>
                        </a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="flex items-center space-x-2 opacity-100 hover:opacity-60">
                            <FontAwesomeIcon icon={faAddressBook} />
                            <span className="font-sans text-lg cursor-pointer">Contact Us</span>
                        </a>
                    </div>
                </header>
            </nav>
        </div>
    );
}

export default HeaderCenter;
