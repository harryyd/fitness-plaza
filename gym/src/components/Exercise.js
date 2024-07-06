import React, { useContext, useEffect , useState } from 'react'
import Sidebar from './utility/Sidebar.js'
import ExerciseData from './ExerciseData.js';
import Context from './contexxt/Context.js';

const Exercise = () => {

  const [categorydata , setCategorydata]  = useState([]) ; 
  const {bodypart} = useContext(Context)


  useEffect(() => { 
    const dataFetching = async() =>{

      try{
        console.log("hello");
        const data = await fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList" , {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': '47345d327amsh1f7f995b4f17387p12ab4ajsn6a2c5cfde5ae',
                  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }})
        const realdta = await data.json() ; 
        console.log(realdta) ; 
        setCategorydata(realdta)
      }
      catch(error){
        console.log(error);
      }
    }

    dataFetching() ; 
  },[])
  // useEffect(() =>{

  //   const exerciseData = async() =>{
  //     try{
  //       const response = await fetch(url , options);
  //       const realdata = await response.json();
  //       console.log(realdata);
  //   }
  //   catch(error){
  //       console.log("error fetching data" , error)
  //   }
  //   }

  //   exerciseData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   },[])





  return (
    <>
    {/* <div> </div> */}
    <div className='text-5xl font-extrabold pl-10 pr-20 text-center mt-[30px] mb-[30px]'> {bodypart.toUpperCase()}</div>
      <div className='flex'>
      <Sidebar data={categorydata}/>
      <ExerciseData /> 
    </div>
    </>
   
  )
}

export default Exercise
