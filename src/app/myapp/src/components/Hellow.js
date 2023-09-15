import React, { useState } from 'react'

function Hellow() {
    const [phoneNumber, setPhoneNumber]=useState("")
    const change=(e)=>
    {
        setPhoneNumber=e.target.value
    }
    const handleSubmit=(e)=>
    {e.preventDefault();

        console.log(setPhoneNumber)
    }
  return (
    <div><h1>Registeration Form</h1>
    <div className='rform'>
        <form onSubmit={handleSubmit}>
      
            <label>Phone Number
            <input type="tel" value={phoneNumber} onChange={change}required/>
            </label>
           <button type='submit'>submit</button>
        </form>
    </div>
        </div>
  );
}

export default Hellow