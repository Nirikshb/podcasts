import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast for displaying error messages
import InputComponent from '../../Common/Input';
import Button from '../../Common/Button';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../slices/userSlice';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    console.log('Handling Signup...');

    if (password === confirmPassword && 
        password.length >= 6 &&
        fullName &&
        email) 
        {
      try {
        // Creating user's account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('user', user);

        // Define fileUrl here or wherever you get it
        const fileUrl = 'your_profile_pic_url';

        await setDoc(doc(db, 'users', user.uid), {
          name: fullName, // Fixed the variable name here
          email: user.email,
          uid: user.uid,
          profilePic: fileUrl, // Fixed the variable name here
        });

        // Saving data in redux, calls the redux action
        dispatch(
          setUser({
            name: fullName,
            email: user.email,
            uid: user.uid,
          })
        );

        toast.success("Yippie kay-yay Login Created")
        navigate('/profile');
        console.log('user', user);
      } catch (e) {
        console.log('error', e);
        toast.error(e.message);
        setLoading(false);
      }
    } else {
      if (password !== confirmPassword) {
        toast.error('Please Make Sure Your Passwords Match');
      }
      else if (password.length < 6) {
        toast.error('Make sure password length is at least 6 characters');
      }
    }
  };
        

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
   
   <Button text={loading ? "Loading..." : "Signup"} 
   disabled={loading} 
   onclick={handleSignup} />
   
   </>
  )
}

export default SignupForm;