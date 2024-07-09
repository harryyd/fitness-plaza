/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Login = () => {
    return (
        <div>
            <div className="w-full lg:grid lg:max-h-[400px] lg:grid-cols-2 xl:max-h-[800px] bg-black">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold text-white">Login</h1>
                            <p className="text-gray-400 text-sm">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2 text-white text-sm">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className='bg-black border p-3 rounded border border-gray-800 text-sm'
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <label htmlFor="password" className='text-white text-sm'>Password</label>
                                    <NavLink
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline text-white text-sm"
                                    >
                                        Forgot your password?
                                    </NavLink>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="password"
                                    className='bg-black border border-gray-800 p-2.5 rounded text-white text-sm'

                                    required />
                            </div>
                            <button type="submit" className="w-full bg-white text-black p-3 rounded text-sm ease-in duration-300 hover:bg-black hover:text-white" >
                                Login
                            </button>
                            <button variant="outline" className="w-full text-white border rounded border-white p-3 text-sm border-gray-800 ease-in duration-300 hover:tracking-widest">
                                Login with Google
                            </button>
                        </div>
                        <div className="mt-4 text-center text-sm text-white">
                            Don&apos;t have an account?{" "}
                            <Link to="/signup" className="underline text-white">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden bg-muted lg:block">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/2fba5f51-a18e-4ee7-93b6-0b53db29dfc2/1716607jpgOriginalDelivery.jpg?format=500w"
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-[700px] w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
