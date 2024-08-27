
import React from 'react'
import { useSelector } from 'react-redux'

const Test = () =>{

    const showdata = useSelector(state => state.cart.item) 
    console.log(showdata)
    return (
        <div>
            {
                showdata.map(item =>{
                    return (
                        <div> 
                            <p> {item.dascription}</p>
                            <p>{item.name}</p>
                            <p>{item.amount}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Test




// import React, { useState } from 'react'

// const Test = () => {
//     const [message , setMessage] = useState('')


//     const changehandler = (e) =>{
//         setMessage(e.target.value) ; 
//     }
    
//     const submithandler = async(e) =>{
//         e.preventDefault(); // Prevent default form submission
        
//         try {
//             const response = await fetch("http://localhost:4000/auth/testing", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ data: message }) // Send the message to the backend
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Data sent successfully");
//                 console.log(data) ;
//                 // Optionally, you can reset the form after successful submission
//                 setMessage('');
//             } else {
//                 console.error("Failed to send data");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }
//   return (
//     <div>
//     <form onSubmit={submithandler}>
//     <input type='text' placeholder='enter the data ' onChange={changehandler} value={message}/> 
//     <button> submit </button>
//     </form>
      
//     </div>
//   )
// }

// export default Test
