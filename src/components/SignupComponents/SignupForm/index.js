import React from 'react'
import InputComponent from '../../Input';
import Button from '../../Common/Button';
import {auth, db, storage } from "../../../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import {useDispatch} from "react-redux";
import {setUser} from "../../../slices/userSlice";
import {useNavigate} from "react-router-dom";


const SignupForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignup = async () => {
        console.log("Handling Signup...");
  
        if(password == confirmPassword && password.length >=6){
            try{
                //creating user's account
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                const user = userCredential.user;
                console.log("user", user);

                await setDoc(doc(db, "users", user.id), {
                    name: name,
                    email: user.email,
                    uid:user.uid,
                    profilePic:fileUrl,
                });
           
                //saving data in redux, calls the redux actin
                dispatch(setUser({
                    name : fullName,
                    email:user.email,
                    uid:user.uid,
                })
                );

                navigate("/profile");
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