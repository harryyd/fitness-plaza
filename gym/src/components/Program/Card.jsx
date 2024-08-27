import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const {name , description ,bannerImage} = props.data 
    console.log(props) ;

    const navigate = useNavigate() ; 

    const clickhandler = ()=>{
        navigate('/SingleProgram' , {state : props.data})
    }

    //  description = description.substring(0 ,30); 
  return (
    <>
    <div>

    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 mb-[100px]">

        <img className="rounded-t-lg size-full" src= {bannerImage} alt="very" />
      <div className="p-5">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          { description.substring(0,120) + `...`}
        </p>
        <button
          onClick={clickhandler}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-400 rounded-lg hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-blue-300 ease-in duration-300 hover:text-white"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
      </div>
    </>
  )
}

export default Card


// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
 
// export function CardDefault() {
//   return (
//     <Card className="mt-6 w-96">
//       <CardHeader color="blue-gray" className="relative h-56">
//         <img
//           src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//           alt="card-image"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           UI/UX Review Check
//         </Typography>
//         <Typography>
//           The place is close to Barceloneta Beach and bus stop just 2 min by
//           walk and near to &quot;Naviglio&quot; where you can enjoy the main
//           night life in Barcelona.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button>Read More</Button>
//       </CardFooter>
//     </Card>
//   );
// }