import React, { useState } from 'react'
import InputComponent from '../components/Input'
import SignupForm from '../components/SignupComponents/SignupForm';

const Signup = () => {
    
    const [flag, setFlag] = useState(false);

    const handleSignup = () =>{
      console.log("Signing up handled");
    };

    return (
    <div>
        <Header />
        
        {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
        {!flag ? <SignupForm /> : <></>}

        <p>Click if you already have an account</p>
    </div>
  )
}

export default Signup