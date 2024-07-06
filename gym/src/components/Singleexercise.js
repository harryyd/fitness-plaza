import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Context from './contexxt/Context';

const Singleexercise = () => {
    const {id} = useParams() ; 
    const newid = id.substring(1) ; 
    console.log("newid " ,newid) 


    const {setSinglebodypartdata , singlebodypartdata} =useContext(Context) ; 
    // singlebodypartdata

    useEffect(() =>{
      const SingleexerciseDataFetch = async() =>{
        try{
          const data = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${newid}` , {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '47345d327amsh1f7f995b4f17387p12ab4ajsn6a2c5cfde5ae',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          }) ; 
          const result = await data.json(); 
          console.log("result is " , result) ; 
          setSinglebodypartdata(result) ; 
        }catch(error){
          console.log(error) ; 
        }
      }
      SingleexerciseDataFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  return (
    <>

    
    <p> {singlebodypartdata.equipment} </p>
    <p> {singlebodypartdata.bodyPart} </p>
    <img src={singlebodypartdata.gifUrl} alt="hello" />
    <p>
      {singlebodypartdata.name}
    </p>

    {
      singlebodypartdata.instructions.map((single , index)=>{
        return (
          <p>
              <span>{index+1}    </span>{single}
          </p>
        )
      })
    }
    {
      singlebodypartdata.secondaryMuscles.map((item , index) =>{
        return (
          <p> <span> * </span>{item}</p>
        )
      })
    }
    <p> {singlebodypartdata.target}</p>
    </>	
  )
}

export default Singleexercise
