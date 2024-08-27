/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState , useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Context from './contexxt/Context'

const Login = () => {

    const {setLogin , setUserdata} = useContext(Context)

    const [loginData, setLogindata] = useState({
        email: '',
        password: ''
    })

    const loginChangeHandler = (e) => {
        const { name, value } = e.target;

        setLogindata({
            ...loginData,
            [name]: value
        })
    }

    const dataSubmit = async(e) => {
        e.preventDefault()
        // console.log("submit sucees")
        try {
            const response = await fetch("http://localhost:4000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: await JSON.stringify(loginData) // Send the message to the backend
            });

            if(!response.ok) {
                console.log("wrong credentials")
                toast.error(`something went wrong`, {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: "Bounce",
                });
            }
            else {

                const data = await response.json() ; 
                toast.success(`login success`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true, 
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: "Bounce",
                });
                console.log("data" , data) ;

                setLogin(true);
                setUserdata(data) ; 

                setLogindata({
                    email : "",
                    password :""
                })
            }
        }catch(error){
            console.log("error at login ")
        }
    }

    console.log(loginData);

        return (
            <div>
                <div className="w-full lg:grid lg:max-h-[800px] lg:grid-cols-2 xl:max-h-[800px] bg-black">
                    <div className="flex items-center justify-center py-12">
                        <div className="mx-auto grid w-[350px] gap-6">
                            <div className="grid gap-2 text-center">
                                <h1 className="text-3xl font-bold text-white">Login</h1>
                                <p className="text-gray-400 text-sm">
                                    Enter your email below to login to your account
                                </p>
                            </div>
                            <form onSubmit={dataSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2 text-white text-sm">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        name="email"
                                        value ={loginData.email} 
                                        className='bg-black border p-3 rounded border border-gray-800 text-sm'
                                        onChange={loginChangeHandler}
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
                                        name="password"
                                        value = {loginData.password}
                                        onChange={loginChangeHandler}
                                        required />
                                </div>
                                <button type="submit" className="w-full bg-white text-black p-3 rounded text-sm ease-in duration-300 hover:bg-black hover:text-white" >
                                    Login
                                </button>
                                <button variant="outline" className="w-full text-white border rounded border-white p-3 text-sm border-gray-800 ease-in duration-300 hover:tracking-widest">
                                    Login with Google
                                </button>
                            </div>
                            </form>
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
                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            </div>
        )
    }

    export default Login
