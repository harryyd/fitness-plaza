import React from 'react'
import { useContext } from 'react'
import Context from './contexxt/Context'
import { NavLink } from 'react-router-dom';

const ExerciseData = () => {

    const {bodypartdata} = useContext(Context) ; 
    // console.log(typeof bodypartdata)

  return (
    <>

    <div className='flex flex-row justify-evenly flex-wrap mb-[40px]' >
    {
        bodypartdata.map((single , index) =>{
            return (
                <>
                <NavLink to={`/exercise/:${single.id}`}> 
                <div key={index} className="flex flex-col max-w-md p-6 dark:bg-gray-800 dark:text-gray-100 mb-[40px]">
                <img src = {single.gifUrl} alt="" key={index} className="flex-shrink-0 object-cover h-[34px] rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                <div>
                    <h2 className="text-xl font-semibold">{single.name}</h2>
                    <span className="block pb-2 text-sm dark:text-gray-400">{single.equipment}</span>
                    {/* {
                        single.instructions.map((item , index) =>{
                            return (
                                <>
                                    <span> . </span><p key={index}>{item}</p>
                                </>
                            )
                        })
                    } */}
                </div>
            </div>
            </NavLink>
                </>
            )
           

        })
    }
    </div>
      


    </>
  )
}

export default ExerciseData
