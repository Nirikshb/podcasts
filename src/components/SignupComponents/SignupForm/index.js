import React from 'react'
import InputComponent from '../../Input';
import Button from '../../Button';
import {auth, db, storage } from "../../../firebase";
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";

const SignupForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSignup = async () => {
        console.log("Handling Signup...");
        if(password == confirmPassword && password.length >=6){
            try{
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                const user = userCredential.user;
                console.log("user", user)
            }catch (e) {
                console.log("error", e);
            };
        }
        
    }

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