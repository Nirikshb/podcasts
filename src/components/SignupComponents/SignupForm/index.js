import React from 'react'

const SignupForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <> 
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
   <Button text={"Signup"} onclick={handleSignup} />
   
   </>
  )
}

export default SignupForm;