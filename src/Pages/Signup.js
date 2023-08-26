import React, { useState } from 'react'
import InputComponent from '../components/Input'

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [flag, setFlag] = useState(false);

    const handleSignup = () =>{
      console.log("Signing up handled");
    };

    return (
    <div>
        <Header />
        <h1>Signup</h1>
       

        <p>Click if you already have an account</p>
    </div>
  )
}

export default Signup