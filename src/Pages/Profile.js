import React from 'react';
import { userSelector } from "react-redux";
import Header from '../components/Common/Header';


const Profile = () => {
  const user = useSelector((state) => state.user.user);
  console.log("My user", user);

  if(!user){
    return <p>Loading....</p>;
  }

  const handleLogout = ()=>{
    signOut(auth).then(()=>{
      //signed out 
      toast.success("User Logged Out")
    }).catch((error)=>{
      //the error
      toast.error(error)
    });

  };

  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.uid}</h1>

      <Button text={Logout} onClick={handleLogout} />
    </div>
  );
}

export default Profile;