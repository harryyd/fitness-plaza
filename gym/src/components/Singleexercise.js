import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Context from './contexxt/Context';

const Singleexercise = () => {
  const { id } = useParams();
  const newid = id.substring(1);
  console.log("newid ", newid)


  const { setSinglebodypartdata, singlebodypartdata } = useContext(Context);
  // singlebodypartdata

  useEffect(() => {
    const SingleexerciseDataFetch = async () => {
      try {
        const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/3293`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '47345d327amsh1f7f995b4f17387p12ab4ajsn6a2c5cfde5ae',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.text();
          console.log(result);
          setSinglebodypartdata(result) ;
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
    SingleexerciseDataFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>


      <p> {singlebodypartdata.equipment} </p>
      <p> {singlebodypartdata.bodyPart} </p>
      <img src={singlebodypartdata.gifUrl} alt="hello" />
      <p>
        {singlebodypartdata.name}
      </p>

      {
        singlebodypartdata.instructions.map((single, index) => {
          return (
            <p>
              <span>{index + 1}    </span>{single}
            </p>
          )
        })
      }
      {
        singlebodypartdata.secondaryMuscles.map((item, index) => {
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
