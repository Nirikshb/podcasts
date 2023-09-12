import React from 'react';
import { userSelector } from "react-redux";
import { setUser } from '../slices/userSlice';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  console.log("My user", user);

  return (
    <div>
      Profile
    </div>
  )
}

export default Profile;