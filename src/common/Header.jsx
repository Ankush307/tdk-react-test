import React from 'react';
import { SearchIcon } from '../utils/Icons';

const Header = () => {
    const toggleMenu = () => {
        const menu = document.getElementById('mobile-menu');
        const body = document.body;
        menu.classList.toggle('hidden');
        body.style.overflow = menu.classList.contains('hidden') ? 'auto' : 'hidden';
    };

    return (
        <div className="bg-blue-chalk">
            <img className="pointer-events-none md:block hidden max-w-[1440px] mx-auto" src="./assets/image/png/navigation-bar.png" alt="navigation bar" />
            <nav className="text-white">
                <div className="container mx-auto flex items-center justify-between px-5 max-md:py-3 md:pt-11 md:pb-[22px]">
                    <div className="flex items-center md:hidden justify-between w-full">
                        <img src="./assets/image/png/page-logo.png" alt="Logo" className="w-[73px] h-[15px] relative z-50" />
                        <button
                            className="relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1 transition-transform duration-300"
                            onClick={toggleMenu}>
                            <span className="block w-5 h-[2px] bg-white transition-transform duration-300"></span>
                            <span className="block w-5 h-[2px] bg-white transition-opacity duration-300"></span>
                            <span className="block w-5 h-[2px] bg-white transition-transform duration-300"></span>
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {['Menu One', 'Menu Two', 'Menu Three', 'Menu Four', 'Menu Five'].map((menu, index) => (
                            <a key={index} href={`#${menu.toLowerCase().replace(' ', '')}`} className="hover:text-gray-300 text-[13px] leading-[15px]">
                                {menu}
                            </a>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center justify-between max-w-[257px] w-full px-[14px] py-2 bg-transparent border-[1px] border-white rounded-[5px]">
                        <input
                            type="text"
                            className="bg-transparent border-none focus:outline-none placeholder-white"
                            placeholder="Search by Keyword" />
                        <SearchIcon />
                    </div>
                </div>
                <div id="mobile-menu" className="md:hidden fixed right-0 h-full w-full bg-blue-chalk text-white p-5 transition-all duration-300 flex-col flex items-center justify-center">
                    <div className="space-y-5 text-center">
                        {['Menu One', 'Menu Two', 'Menu Three', 'Menu Four', 'Menu Five'].map((menu, index) => (
                            <a key={index} href={`#${menu.toLowerCase().replace(' ', '')}`} className="block hover:text-gray-300">
                                {menu}
                            </a>
                        ))}
                        <div className="flex items-center justify-between px-[14px] py-2 bg-transparent border-[1px] border-white rounded-[5px]">
                            <input
                                type="text"
                                className="bg-transparent border-none focus:outline-none placeholder-white"
                                placeholder="Search by Keyword"
                            />
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
