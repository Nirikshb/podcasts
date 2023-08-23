import React, { useState } from 'react'
import InputComponent from '../components/Input'

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
    <div>
        <Header />
        <h1>Signup</h1>
        <InputComponent 
         state={fullName}
         setState={setFullName}
         placeholder="Full Name"
         type="text"
         required={true}
        />

        <InputComponent
        state={email}
        setState={setEmail}
        placeholder="Full Name"
        type="text"
        required={true}
        />

        <InputComponent
        state={password}
        setState={setPassword}
        placeholder="Password"
        type="password"
        required={true}
        />

      
        <InputComponent
        state={confirmPassword}
        setState={setConfirmPassword}
        placeholder="Confirm Password"
        type="password"
        required={true}
        />  
    </div>
  )
}

export default Signup