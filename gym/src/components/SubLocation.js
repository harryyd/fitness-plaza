import React from 'react'
import "./contact.css"

const SubLocation = () => {
  return (
    <div>

        <div className='bg-black text-white '>
            <div className='flex justify-evenly pt-[100px] text-sm flex-wrap'>
                <div className=''>
                    <h1 className='text-5xl font-black'>NOIDA </h1>
                    <p className='text-center mt-10'>Shubham Enclave <br/> Plot 1 Block A<br/> DL 110063 </p>
                </div>
                <div>
                    <h1 className='text-5xl font-black  '>DWARKA</h1>
                    <p className='text-center mt-10'>  Block A Sector <br/>12 Dwarka  DL<br/> 110078</p>
                </div>
            </div>

            <div className='flex flex-row mt-[100px] flex-wrap'  >
                <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839353-WUEAVI0MS9EW70OUA4HM/2888448.jpg?format=300w" alt="photo0"  style={{height : "378px" ,width : "auto" , flexShrink :1}}/>
                <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839365-7IMNB6JSHH4DF7TQMUJ7/Stocksy_comp_2217207+%281%29.jpg?format=300w" alt="photo1" style={{height : "378px" ,flexShrink :1}} />
                <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839327-XPPCORY8DG6OEI218VI7/1716591+%281%29.jpg?format=300w" alt="photo2" style={{height : "378px" ,flexShrink :1}}/>
                <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839317-ZJRJ5911ZF2SIJKJYR5Z/2888434.jpg?format=300w" alt="photo3" style={{height : "378px",flexShrink :1}} />
                <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839376-BX3V9E7L777J6A1CTWTR/Stocksy_comp_2217189+%281%29.jpg?format=300w" alt="photo4" style={{height : "378px" ,flexShrink :1}}/>
                <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839338-MC8PZG6HTSKUSBVSWKZI/2888491.jpg?format=300w" alt="photo5" style={{height : "378px" ,flexShrink :1}}/>

            </div>
        </div>
        {/* <hr></hr> */}
    </div>
  )
}

export default SubLocation
