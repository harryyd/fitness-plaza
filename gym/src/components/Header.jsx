/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState , useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Context from './contexxt/Context'

export default function Header() {

    const [show, setShow] = useState(false)

    const {isLogin , userdata} = useContext(Context) ; 

    const closeHandler = () => {
        setShow(!show)
    }

    return (
        // <header className="shadow sticky z-50 top-0 dark:bg-violet-400 ">
        //     <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        //             <Link to="/" className="flex items-center">

        //                 {/* <h1> the gym </h1> */}
        //                 <img
        //                     src="https://i.pinimg.com/236x/03/b8/8a/03b88ac687b6262f94e8658a8ba95a0b.jpg"
        //                     className="mr-3 h-12"
        //                     alt="Logo"
        //                 />
        //             </Link>
        //             <div className="flex items-center lg:order-2">
        //                 <Link
        //                     to="/login"
        //                     className="text-black dark:bg-violet-400 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:bg-black ease-in duration-300 hover:border hover:border-violet-400"
        //                 >
        //                     Login
        //                 </Link>
        //             </div>
        //             <div
        //                 className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        //                 id="mobile-menu-2"
        //             >
        //                 <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        //                     <li>
        //                         <NavLink
        //                         to="/"
        //                             className={({isActive}) =>
        //                                 `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
        //                             }
        //                         >
        //                             Home
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/about"
        //                             className={({isActive}) =>
        //                                 `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
        //                             }
        //                         >
        //                             About
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/exercise"
        //                             className={({isActive}) =>
        //                                 `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
        //                             }
        //                         >
        //                             Exercise 
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/contact"
        //                             className={({isActive}) =>
        //                                 `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
        //                             }
        //                         >
        //                             Contact
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/book"
        //                             className={({isActive}) =>
        //                                 `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-400 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-400  lg:p-0`
        //                             }
        //                         >
        //                             Book
        //                         </NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>
        <header className="p-4 dark:bg-black dark:text-white">
            <div className="container flex justify-between h-10 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-400">
                        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                        <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                    </svg>
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/" className="flex items-center px-4 -mb-1 hover:text-violet-400 ease-in duration-300 ">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/about" className="flex items-center px-4 -mb-1 hover:text-violet-400 ease-in duration-300">about</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/exercise" className="flex items-center px-4 -mb-1 hover:text-violet-400 ease-in duration-300">exercise</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center px-4 -mb-1 hover:text-violet-400 ease-in duration-300">contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/book" className="flex items-center px-4 -mb-1 hover:text-violet-400 ease-in duration-300">Booking</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/program" className="flex items-center px-4 -mb-1 hover:text-violet-400 ease-in duration-300">programme </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/cart" className="flex items-center px-4 -mb-1 hover:text-violet-400 ease-in duration-300">Cart </NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">


                    <div className="items-center flex-shrink-0 hidden lg:flex">
                    {
                        isLogin ? (<NavLink to="/Profile"><button className="self-center px-8 py-3 rounded hover:text-violet-400 ease-in duration-300">{userdata.data.firstname}</button> </NavLink>) : (
                            <NavLink to="/login"><button className="self-center px-8 py-3 rounded hover:text-violet-400 ease-in duration-300">Sign in</button> </NavLink>
                        )
                    }
                        
                        <NavLink to="/signup"><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 text-black hover:bg-black hover:text-white ease-in duration-300">Sign up</button></NavLink>
                    </div>


                </div>
                {
                    show ? (<aside id="default-sidebar" class="lg-hidden fixed top-0 right-0 z-40 w-64 h-screen  sm:translate-x-0 text-sm" aria-label="Sidebar">
                        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black">

                            <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" onClick={closeHandler} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white mb-[10px]" >
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only" >Close menu</span>
                            </button>
                            <br />
                            <ul class="space-y-2 font-medium">
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                        </svg>
                                        <span class="ms-3">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                        </svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
                                        <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">About</span>
                                        <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                        </svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Exercise</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                        </svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Booking </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                        </svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Tranning programme </span>
                                    </a>
                                </li>

                                {
                                    isLogin ? (
                                        <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                        </svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">user name </span>
                                    </a>
                                </li>
                                    ) :(
                                        <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                        </svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                                    </a>
                                </li>
                                    )
                                }

                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                        </svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>)
                        :
                        (<button className="p-4 lg:hidden" onClick={closeHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>)
                }

            </div>
        </header>
    );
}
