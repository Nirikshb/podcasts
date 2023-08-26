import React from 'react'

const SignupForm = () => {
  return (
    <div> <InputComponent 
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
   <Button text={"Signup"} onclick={handleSignup} /></div>
  )
}

export default SignupForm;