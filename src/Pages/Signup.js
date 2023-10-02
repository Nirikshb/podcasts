import React, { useState } from 'react';
import InputComponent from '../components/Common/Input'; // Import InputComponent
import SignupForm from '../components/SignupComponents/SignupForm'; // Import SignupForm component

const Signup = () => {
    //variable 'flag' to toggle between signup and login views
    const [flag, setFlag] = useState(false);

    // Function to handle signup
    const handleSignup = () =>{
      console.log("Signing up handled");
    };

    return (
    <div>
        <Header />
        
        {/* Container for signup/login forms and toggling */}
        <div className='input-wrapper'>  
            
            {/* Display 'Signup' or 'Login' heading based on 'flag' */}
            {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
            
            {/* Display 'SignupForm' or 'LoginForm' based on 'flag' */}
            {!flag ? <SignupForm /> : <LoginForm />}
            
            {/* Display a message and toggle link based on 'flag' */}
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
