import React, { useState } from 'react'
import { SearchIcon } from '../utils/Icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <img className='pointer-events-none md:block hidden' src="./assets/image/png/navigation-bar.png" alt="" />
            <nav className="bg-blue-chalk text-white">
                <div className="container mx-auto flex items-center justify-between px-5 py-3 md:py-4">
                    <div className="flex items-center md:hidden justify-between w-full">
                        <div className="block md:hidden">
                            <img
                                src="./assets/image/png/page-logo.png"
                                alt="Logo"
                                className="w-[73px] h-[15px] "
                            />
                        </div>
                        <button
                            className="md:hidden ml-2 flex-col flex gap-[2px] justify-end items-center"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span className='material-icons w-5 h-[2px] bg-white'></span>
                            <span className='material-icons w-5 h-[2px] bg-white'></span>
                            <span className='material-icons w-5 h-[2px] bg-white'></span>
                            <span className="material-icons">menu</span>
                        </button>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="hover:text-gray-300 text-[13px] ">
                            Menu One
                        </a>
                        <a href="#services" className="hover:text-gray-300 text-[13px] ">
                            Menu Two
                        </a>
                        <a href="#about" className="hover:text-gray-300 text-[13px] ">
                            Menu Three
                        </a>
                        <a href="#portfolio" className="hover:text-gray-300 text-[13px] ">
                            Menu Four
                        </a>
                        <a href="#contact" className="hover:text-gray-300 text-[13px] ">
                            Menu Five
                        </a>
                    </div>
                    <div className="hidden !text-white md:flex items-center justify-between max-w-[257px] w-full px-4 py-2 bg-transparent border-2 border-white rounded">
                        <input
                            type="text"
                            className="bg-transparent border-none focus:outline-none placeholder-white"
                            placeholder="Search by Keyword"
                        />
                        <SearchIcon />
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden absolute bg-blue-chalk w-full flex flex-col items-center justify-center text-center ">
                        <div className="space-y-10 h-full p-4">
                            <a href="#home" className="block hover:text-gray-300">
                                Menu One
                            </a>
                            <a href="#services" className="block hover:text-gray-300">
                                Menu Two
                            </a>
                            <a href="#about" className="block hover:text-gray-300">
                                Menu Three
                            </a>
                            <a href="#portfolio" className="block hover:text-gray-300">
                                Menu Four
                            </a>
                            <a href="#contact" className="block hover:text-gray-300">
                                Menu Five
                            </a>
                            <input
                                type="text"
                                placeholder="Search by Keyword"
                                className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded placeholder:text-white focus:outline-none focus:border-gray-400"
                            />
                        </div>
                    </div>
                )}
            </nav>

        </div>
    )
}

export default Header