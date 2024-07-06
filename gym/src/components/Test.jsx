import React, { useState } from 'react'

const Test = () => {
    const [message , setMessage] = useState('')


    const changehandler = (e) =>{
        setMessage(e.target.value) ; 
    }
    
    const submithandler = async(e) =>{
        e.preventDefault(); // Prevent default form submission
        
        try {
            const response = await fetch("http://localhost:5000/api/gym", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data: message }) // Send the message to the backend
            });

            if (response.ok) {
                console.log("Data sent successfully");
                // Optionally, you can reset the form after successful submission
                setMessage('');
            } else {
                console.error("Failed to send data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
  return (
    <div>
    <form onSubmit={submithandler}>
    <input type='text' placeholder='enter the data ' onChange={changehandler} value={message}/> 
    <button> submit </button>
    </form>
      
    </div>
  )
}

export default Test
