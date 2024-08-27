import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Context from './contexxt/Context';

const Singleexercise = () => {
  const {id} = useParams();
  const newid = id.substring(1);
  // let newid1 = "3293" ;


  const { setSinglebodypartdata, singlebodypartdata } = useContext(Context);
  // singlebodypartdata

  useEffect(() => {
    const SingleexerciseDataFetch = async () => {
      try {
        const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${newid}`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'a79a6c9b94msh14f222cdc209b6dp141dcdjsn3dd31b6e8aee',
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
