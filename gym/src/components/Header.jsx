/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header() {
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
	<div className="container flex justify-between h-16 mx-auto">
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
				<NavLink to="/book" className="flex items-center px-4 -mb-1 hover:text-violet-400 ease-in duration-300">book</NavLink>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">


		<div className="items-center flex-shrink-0 hidden lg:flex">
        <NavLink to="/login"><button className="self-center px-8 py-3 rounded hover:text-violet-400 ease-in duration-300">Sign in</button> </NavLink>
		<NavLink to="/signup"><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 text-black hover:bg-black hover:text-white ease-in duration-300">Sign up</button></NavLink>
		</div>
			
			
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
}
