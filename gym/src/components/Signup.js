import React from 'react'
import { Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className='bg-black text-white p-[50px] text-sm'>
            <div className="mx-auto max-w-sm">
                <div>
                    <h1 className="text-3xl text-center">Sign Up</h1>
                    <p className='text-xs text-gray-400 mt-2 text-center'>
                        Enter your information to create an account
                    </p>
                </div>
                <div>
                    <div className="grid gap-4 mt-7 ">
                        <div className="grid grid-cols-2 gap-1 ">
                            <div className="grid gap-2">
                                <label htmlFor="first-name">First name</label>
                                <input id="first-name" placeholder="Max" className='pt-1 pb-1 bg-black text-white border border-gray-800 rounded-md' required />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="last-name">Last name</label>
                                <input id="last-name" placeholder="Robinson" className='pt-1 pb-1 bg-black text-white border border-gray-800 rounded-md' required />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                className='p-2 bg-black text-white border border-gray-800 rounded-md'
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className='p-2 bg-black text-white border border-gray-800'/>
                        </div>
                        <button type="submit" className="w-full bg-white text-black hover:bg-black hover:text-white ease-in duration-300 border border-gray-800 p-3 rounded-md">
                            Create an account
                        </button>
                        <button variant="outline" className="w-full hover:bg-black hover:text-white ease-in duration-300 border border-gray-800 p-3 rounded-md hover:tracking-widest">
                            Sign up with GitHub
                        </button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="underline ">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
