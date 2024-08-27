/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useRef, useEffect } from 'react'
import getmindate from "./utility/Date"
// import Dropdown from 'react-bootstrap/Dropdown';
import { ToastContainer } from 'react-toastify';
import Context from './contexxt/Context'
import Modals from './utility/Modals';

const Book = () => {

	// fecth data from backend and show it to frontend if its success change the code into context 
	// or redux



	const [programData , setProgramdata] = useState({
		programName  :["Fatloss" , "Bodybuilding" , "zumba"] , 
		ProgramTime : ["Night"] , 
	})

	// console.log(programData.programName[0])

	const [bookingData, setBookingdata] = useState({

		firstname : "",
		email :"", 
		address :"" ,
		city : "" ,
		training : "" ,
		shift : "",
		date : "" ,
		Expectation : ""

	})
	const { isLogin } = useContext(Context)
	console.log("isLogin ", typeof isLogin) ;
	const alertMessageRef = useRef()
	// eslint-disable-next-line no-unused-vars
	const [mindate, setMindate] = useState(getmindate()) // date.now 
	// const mindate = getmindate() ; 
	console.log(mindate)
	// getmindate()

	// useEffect()  get min date  // then usememo hold until date is gonna change 



	useEffect(() =>{
		const fecthdata = async() =>{

			const response = await fetch("http://localhost:4000/api/getAllWorkout" ,{method : "GET" ,})
			const data = await response.json() ;

			data.data.forEach(item => {
				setProgramdata(prevData => {
				  // Check if the program name already exists in the state
				  if (!prevData.programName.includes(item.name)) {
					return {
						 programName: [...prevData.programName, item.name]
					}
				  }
				  // Return the previous state if the program name already exists
				  return prevData;
				});
			  });
		} 

		fecthdata()  
	},[])
	// console.log(programData.ProgramTime)

	const clickHandler = async(event) =>{
		event.preventDefault() ; 
		if(isLogin) {
			console.log("enter data success")
		}
		else{
			console.log("failed enter data")
		}
		isLogin ? (console.log("true")) : (<Modals/>) 
		console.log("clicked");
	}	

	// const clickHandler = async(event) =>{
        
    //     try {
                
    //         console.log(userdata)  
    
            // const response = await fetch("http://localhost:5000/api/gym" ,
            // {
            // method : "POST" ,
            // body : JSON.stringify(userdata),
            // headers:{'content-Type' : 'application/json'}
            // })
    
    //        const ans = await response.json() 
    //        console.log(ans)

    //        setUserdata({
    //         firstName :  "" , 
    //         lastName  : "" , 
    //         email : "" , 
    //         date : "" , 
    //        })

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }


	const cancelAlert = () => {
		console.log("cancle alert");
		alertMessageRef.current.style.display = "none"
	}

	const ChangeHandler = (e) =>{
		const {name , value} = e.target ; 

		setBookingdata({
			...bookingData , 
			[name]: value
		})
	}

	return (
		<div>
			{
				!isLogin && <p className='text-center bg-black text-white' id="alert_message" ref={alertMessageRef}>please login before submitting  <span onClick={cancelAlert} className='cursor-pointer'>X</span></p>
			}

			{/* toast laake yaha par check karwana hai if login === true then not show else show */}
			<section className="p-6 dark:bg-black dark:text-gray-900">

				<form noValidate="" onSubmit = {clickHandler} action="" className="container flex flex-col mx-auto space-y-12 bg-black ">
					<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 text-black">
						<div className="space-y-2 col-span-full lg:col-span-1">
							<p className="font-medium">Personal Inormation</p>
							<p className="text-xs">enter personal information</p>
						</div>
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-black">
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="firstname" className="text-sm text-gray-500">Name</label>
								<input id="firstname" onChange ={ChangeHandler} type="text" name="firstname" placeholder="First name" className="w-full rounded-md p-1 border-[2px] border-black-700 focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
							</div>

							<div className="col-span-full sm:col-span-3">
								<label htmlFor="email" className="text-sm text-gray-500">Email</label>
								<input id="email" type="email" onChange ={ChangeHandler} name="email" placeholder="Email" className="w-full rounded-md border-[2px] border-black-200 p-1 focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
							</div>
							<div className="col-span-full">
								<label htmlFor="address" className="text-sm text-gray-500">Address</label>
								<input id="address" type="text" onChange ={ChangeHandler} name="address" placeholder="" className="w-full rounded-md border-[2px] border-black-700 p-1 focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
							</div>
							<div className="col-span-full sm:col-span-2">
								<label htmlFor="city" className="text-sm text-gray-500">City</label>
								<input id="city" type="text" name="city" onChange ={ChangeHandler} placeholder="" className="w-full rounded-md border-[2px] border-black-700 p-1 focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
							</div>
						</div>
					</fieldset>
					<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 border-[2px] border-black-700">
						<div className="space-y-2 col-span-full lg:col-span-1">
							<p className="font-medium">Tranning</p>
							<p className="text-xs">enter you tranning regime </p>
						</div>

						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

							<div className='border-2 border-black w-100% text-center sm:col-span-2'>
								<label className='text-black sm:col-span-6 text-start text-sm text-gray-500'>Workout type  	
									<select className='border border-black-200 h-10 w-[150px]' name="training" onChange ={ChangeHandler}>
										{
											programData.programName.map(item => {
												return (
													<option className=''>{item}</option>
												)
											})
										}
									</select>
								</label>

							</div>
							<br />

							<div className='border-2 border-black w-100% text-center sm:col-span-2'>
								<label className='text-black sm:col-span-6 text-start text-sm text-gray-500'>Workout time  -
									<select className='border border-black-200 h-5 ' name="shift" onChange ={ChangeHandler}>
										<option>Morning</option>
										<option>Afternoon</option>
										<option>Evening</option>
										<option>Night</option>
									</select>
								</label>

							</div>

							<div className="col-span-full sm:col-span-3">
								<label htmlFor="website" className="text-sm text-gray-500">date</label>
								<input id="website" type="date" name="date" min={mindate} onChange ={ChangeHandler} placeholder="yyyy/mm/dd" className="w-full rounded-md focus:ring pl-1 focus:ring-opacity-75 focus:dark:ring-violet-600 border-[1px] border-gray-300 text-black" />
							</div>
							<div className="col-span-full">
								<label htmlFor="bio" className="text-sm text-gray-500">Tranning Expectation </label>
								<textarea id="bio" placeholder="" name="Expectation" onChange ={ChangeHandler} className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 border border-gray-300"></textarea>
							</div>
							<button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-800 hover:bg-black ease-in duration-300 hover:text-white">Submit</button>

						</div>
						{/* <button type="button" className="px-4 center py-2 border rounded-md dark:border-gray-800">Change</button> */}
					</fieldset>
				</form>
			</section>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={false}
				rtl={true}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	)
}

export default Book
