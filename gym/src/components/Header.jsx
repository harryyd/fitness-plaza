import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 dark:bg-violet-400 ">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">

                        {/* <h1> the gym </h1> */}
                        <img
                            src="https://i.pinimg.com/236x/03/b8/8a/03b88ac687b6262f94e8658a8ba95a0b.jpg"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-black dark:bg-violet-400 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:bg-black ease-in duration-300 hover:border hover:border-violet-400"
                        >
                            Login
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/exercise"
                                    className={({isActive}) =>
                                        `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
                                    }
                                >
                                    Exercise 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/book"
                                    className={({isActive}) =>
                                        `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
                                    }
                                >
                                    Book
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



//dark:bg-violet-400 
//dark:text-violet-400 