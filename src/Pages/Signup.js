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
      <div className='input-wrapper'>  
        {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
        {!flag ? <SignupForm /> : <LoginForm />}
        
        {!flag ? (
          <p style={{cursor:"pointer"}} onClick={() => setFlag(!flag)}>
            Already have an Account? Click here to Login.
          </p>
        ) : (
          <p onClick={() => setFlag(!flag)}>
            Don't have an Account? Click here to signup.
          </p>
        )}
      </div>
    </div>
  )
}

export default Signup;