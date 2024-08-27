import React from 'react' ; 
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addToCart , calculateTotalAmount} from "../slices/cartSlices";

const SingleProgram = () => {
    const location = useLocation();
    const data = location.state;
    console.log("single program " , data) ;
    
    const dispatch = useDispatch() ;

    const getmembership = (data)=>{
      dispatch(addToCart(data))
      dispatch(calculateTotalAmount())
    }

  return (
    <div className='text-left '>
      <h1 className='mr-[150px] ml-[150px] font-bold text-4xl italic mt-[20px] mb-[20px]'> {data.name}</h1>
      <p className='text-left mr-[150px] ml-[150px]'> {data.description}</p>
      {/* {
        data.images.map((item,index) =>{
          return (
            <img src= {item} alt="key" key={index} /> 
          )
        })
      } */}
      {/* <p> hello single</p> */}

      <p className='ml-[150px] mt-[30px]'> ₹ {data.amount} </p>

      <button className='ml-[150px] mt-[20px] p-[10px] mb-[20px] italic hover:bg-violet-400 rounded-md ease-in duration-300 border border-black' onClick={()=>{getmembership(data)}}> Get membership </button>  
      {/* membership logic here */}
    </div>
  )
}

export default SingleProgram
