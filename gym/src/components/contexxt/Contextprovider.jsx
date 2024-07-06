import React , {useEffect, useState} from 'react'
import Context from "./Context.js";

const Contextprovider = ({children}) => {
    const [bodypart , setBodypart] =useState("ALL") ; 
    const [bodypartdata ,  setBodypartdata] = useState([])  ;
    const [singlebodypartdata , setSinglebodypartdata] = useState([])
    const [test , setTest] = useState([])

    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=20';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '47345d327amsh1f7f995b4f17387p12ab4ajsn6a2c5cfde5ae',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
    };

    useEffect(()=>{
        const originaldata = async() =>{

            try{
                const response = await fetch(url, options);
                const result = await response.json();
                // console.log(result);
                setBodypartdata(result) ; 
            }
            catch(error){
                console.log(error) ; 
            }
        }

        originaldata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    
    console.log( "parent set " ,typeof setBodypartdata)
    console.log( "parent set " ,typeof bodypartdata)

  return (
    <>    
        <Context.Provider value={{ bodypartdata, setBodypartdata ,test , setTest , singlebodypartdata ,setSinglebodypartdata ,bodypart ,setBodypart}}>
            {children}
        </Context.Provider>
            
    </>
  )
}

export default Contextprovider





// const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '47345d327amsh1f7f995b4f17387p12ab4ajsn6a2c5cfde5ae',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }