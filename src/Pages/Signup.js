import React, { useState } from 'react'
import InputComponent from '../components/Input'

const Signup = () => {
    const [fullName, setFullName] = useState("");

  return (
    <div>
        <Header />
     <div>
        <InputComponent 
         state={fullName}
         setState={setFullName}
         placeholder="Full Name"
         type="text"
         required={true}
        />
     </div>
    </div>
  )
}

export default Signup