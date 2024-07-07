import React from 'react'
import { useContext} from 'react'
import Context from '../contexxt/Context';


const Sidebar = (props) => {

	const {data} = props ;

	// let ans = [] ; 

	const {setBodypartdata,setTest ,setBodypart} = useContext(Context) ;
	console.log("typeof setbodypart " , typeof setBodypartdata) 
	console.log("typeof settest " , typeof setTest) 
	// setBodypartData(ans) ; 

	const dataFetchingHandler = async(singlebodypart) => {
		console.log("body part" , singlebodypart)
		setBodypart(singlebodypart) ; 
			try{
				const data = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${singlebodypart}`, {
					method: 'GET',
					headers: {
						'X-RapidAPI-Key': '47345d327amsh1f7f995b4f17387p12ab4ajsn6a2c5cfde5ae',
						'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
					}})
			  const realdata = await data.json() ; 
			  console.log("singel bodypart data" , realdata) ; 
			  setBodypartdata(realdata);	
			}
			catch(error){
				console.log(error) ; 
			}
		

	}

	// console.log(bodypartData) ; 

  return (
    <div  style={{position: "sticky" , top :0 }}>
      <aside className="w-full p-6 sm:w-60 dark:bg-black dark:text-gray-100" style={{position: "sticky" , top :"70px",minHeight:"500px" }}>
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">Body part list</h2> <hr/>
			<div className="flex flex-col space-y-1 cursor-pointer ">
				{
					data.map((single , index) =>{
						return(
							<>
								<p key={index} onClick={() => dataFetchingHandler(single)} className='cursor-pointer  uppercase hover:text-violet-400 hover:tracking-wide'> {single} </p>
							</>
						) 
					
					})
				}
			</div>
		</div>
	</nav>
</aside>

    </div>
  )
}

export default Sidebar
