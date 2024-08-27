import React, { useState } from 'react'
import "./contact.css"

const Contact = () => {

    const [userdata , setUserdata] = useState({
        firstName :  "" , 
        lastName  : "" , 
        email : "" , 
        date : "" , 
    })


    const clickHandler = async(event) =>{
        
        try {
                
            console.log(userdata)  
    
            const response = await fetch("http://localhost:5000/api/gym" ,
            {
            method : "POST" ,
            body : JSON.stringify(userdata),
            headers:{'content-Type' : 'application/json'}
            })
    
           const ans = await response.json() 
           console.log(ans)

           setUserdata({
            firstName :  "" , 
            lastName  : "" , 
            email : "" , 
            date : "" , 
           })

        } catch (error) {
            console.log(error)
        }

    }

    const changeHandler = (event) =>{
        event.preventDefault();
        const {name , value } =event.target ;  
        setUserdata( {...userdata, [name] : value} )
        
    }
    return (
        <>
            <div class="contact_heading test"> CONTACT </div>
            <div class='main-div test'>
                <div class="left">
                    <h1 className='left_heading test'>SCHEDULE A VISIT</h1>
                    <p className='left_paragraph test'>Take a free 30-minute tour of either of our locations to help you decide if wildfire is the right gym for you. You’ll have the opportunity to try equipment, observe classes, and get direct answers to all of your questions.</p>
                </div>
                <div class="right">
                    <form className='text-sm '>
                       
                        {/* <label> Name <span style={{opacity:"0.6" }}>(required)</span> </label> */}
                        {/* <br /> */}
                        <div class="names">
                            <div className='names' style={{ flexDirection: "column" }}>
                                <label >first Name</label>
                                <input 
                                 type="text" 
                                 class="input_tag"
                                 name = "firstName"
                                 value={userdata.firstName}
                                 onChange={changeHandler} />
                            </div>

                            <div className='names' style={{ flexDirection: "column"}} id="lastname">
                                <label>Last Name</label>
                                <input 
                                type="text" 
                                class="input_tag" 
                                name = "lastName"
                                value={userdata.lastName}
                                onChange={changeHandler}/>
                            </div>

                        </div>

                        <br/>

                        <div className='names' style={{ flexDirection: "column"}}>
                        <label>Email</label>
                        <input  
                            type="email" 
                            class="input_tag" 
                            // style={{width : "40vw"}} 
                            name = "email"
                            value={userdata.email}
                            onChange={changeHandler}
                            id="email-input-tag"
                            />
                        </div>

                        <br/>
                        <br/>

                        <label>Date <span style={{opacity:"0.6"}}>(required)</span></label>
                        <br/>
                        <input 
                            type="date" 
                            class="input_tag" 
                            style={{width : "250px"}} 
                            name = "date"
                            value={userdata.date}
                            onChange={changeHandler}/>

                        <br/><br/><br/>

                        <button className='border border-black pt-3 pb-3 pl-7 pr-7 rounded-3xl hover:bg-black hover:text-white ease-in duration-200' onClick={clickHandler}> submit </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
