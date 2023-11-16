import React, { useState } from 'react';
import { toast } from 'react-toastify';
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

    if (
      password === confirmPassword &&
      password.length >= 6 &&
      fullName &&
      email
    ) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        const fileUrl = 'your_profile_pic_url'; // Define fileUrl

        await setDoc(doc(db, 'users', user.uid), {
          name: fullName,
          email: user.email,
          uid: user.uid,
          profilePic: fileUrl, // Assign fileUrl
        });

        dispatch(
          setUser({
            name: fullName,
            email: user.email,
            uid: user.uid,
          })
        );

        toast.success('Account created successfully');
        navigate('/profile');
        console.log('user', user);
      } catch (error) {
        console.log('error', error);
        toast.error(error.message);
        setLoading(false);
      }
    } else {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
      } else if (password.length < 6) {
        toast.error('Password must be at least 6 characters long');
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
        placeholder="Email"
        type="email"
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

      <Button
        text={loading ? 'Loading...' : 'Signup'}
        disabled={loading}
        onClick={handleSignup} // Corrected 'onclick' to 'onClick'
      />
    </>
  );
};

export default SignupForm;
