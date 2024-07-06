import React, { useEffect } from 'react'

const Search = () => {

    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '47345d327amsh1f7f995b4f17387p12ab4ajsn6a2c5cfde5ae',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }

    useEffect(() =>
    async function exerciseData() {

        try{
            const response = await fetch(url , options);
            const realdata = await response.json();
            console.log(realdata);
        }
        catch(error){
            console.log("error fetching data" , error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



  return (
    <>

<form >   
    {/* <label for="search" class="mb-2 text-sm font-medium bg-black">Search</label> */}
    <div class="relative ml-[300px] mr-[300px]">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-black dark:bg-black-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" class="text-black absolute end-2.5 bottom-2.5 bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-white dark:focus:ring-blue-800">Search</button>
    </div>
</form>



    </>
  )
}

export default Search
