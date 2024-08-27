import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const navigate = useNavigate();

    const [userdata, setUserdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
        // role: "user"
    })

    const useChangeHandler = (e) => {
        const { name, value } = e.target
        setUserdata({
            ...userdata,
            [name]: value
        })
    }
    console.log(userdata)
    const dataSubmit = async (e) => {
        e.preventDefault()
        // console.log("submit sucees")
        try {
            const response = await fetch("http://localhost:4000/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: await JSON.stringify(userdata) // Send the message to the backend
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Data sent successfully", data);  
                // <NavLink t0 ="/login" />
                
                toast.success(`${data.message}`, {
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

                console.log(data.message);
                setUserdata({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    // role: ""
                })

                // return redirect("/login");
                // window.location.href = '/login';
                navigate('/login'); 
               

                // toast --> sign up successfuly 
                //redirect to login 



            }else if(response.status === 409){
                toast.error("email already present", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: "Bounce",
                })
            } 
            else {
                console.log(response)
                // console.error("Failed to send data");
                // toast("have some problem while signup")
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
        }
        catch (error) {
            console.log(error);
        }
    }
    // console.log(userdata)
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
                <form onSubmit={dataSubmit}>
                    <div className="grid gap-4 mt-7 " >
                        <div className="grid grid-cols-2 gap-1 " id="signup-names">
                            <div className="grid gap-2">
                                <label htmlFor="first-name">First name</label>
                                <input id="first-name" placeholder="Max" name="firstname" className='pt-1 pb-1 bg-black text-white border border-gray-800 rounded-md' onChange={useChangeHandler} value={userdata.firstname} required />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="last-name">Last name</label>
                                <input id="last-name" placeholder="Robinson" name="lastname" className='pt-1 pb-1 bg-black text-white border border-gray-800 rounded-md' onChange={useChangeHandler} value={userdata.lastname} required />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={userdata.email}
                                required
                                className='p-2 bg-black text-white border border-gray-800 rounded-md'
                                onChange={useChangeHandler}
                                name="email"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name='password' className='p-2 bg-black text-white border border-gray-800' onChange={useChangeHandler} min="6" value={userdata.password}  />
                        </div>

                        {/* role  */}



                        <button className="w-full bg-white text-black hover:bg-black hover:text-white ease-in duration-300 border border-gray-800 p-3 rounded-md" type="submit">
                            Create an account
                        </button>
                        <button variant="outline" className="w-full hover:bg-black hover:text-white ease-in duration-300 border border-gray-800 p-3 rounded-md hover:tracking-widest">
                            Sign up with Google
                        </button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="underline ">
                            Sign in
                        </Link>
                    </div>
                </form>
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

export default Signup
