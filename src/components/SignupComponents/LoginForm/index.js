import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import Button from "../../Common/Button";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../../firebase";
import { getDoc } from 'firebase/firestore';


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async ()=> {
        console.log("handling login");

        try{
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          const user = userCredential.user;
          const userDoc = await getDoc(doc(db, "user", user.uid));
          const userData = userDoc.data();
          console.log("userData", userData);

          dispatch(
            setUser({
              name : userData.name,
              email:user.email,
              uid: user.uid,
            })
          );

          toast.success("User Login Successful");
          setLoading(false);
          navigate("/profile");//navigating to the profile page
        } catch (error){
          console.error("Error signing in", error);
          setLoading(false);
          toast.error(error.message);
        }
    };

     return (
    <div>
      {/* todo : incorprate ui for login maybe use toastify for login pop ups */}
    </div>
  )
}

export default index