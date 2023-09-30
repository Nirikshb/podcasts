import React, { useState } from 'react';
import Button from "../../Common/Button";
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication function
import { auth } from "../../../firebase"; // Import Firebase authentication object
import { getDoc, doc } from 'firebase/firestore'; // Import Firestore functions

const LoginForm = () => {
    // Define state variables to store email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle the login process
    const handleLogin = async () => {
        console.log("Handling login");

        try {
          // Attempt to sign in the user with the provided email and password
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          // Retrieve the authenticated user
          const user = userCredential.user;

          // Retrieve user data from Firestore
          const userDoc = await getDoc(doc(db, "user", user.uid));
          const userData = userDoc.data();
          console.log("User data:", userData);

          // Dispatch an action to set the user in the Redux store (if applicable)
          dispatch(
            setUser({
              name: userData.name,
              email: user.email,
              uid: user.uid,
            })
          );

          // Display a success message (you may use a toast library for this)
          toast.success("User Login Successful");

          // Perform navigation to the profile page (you may use a routing library)
          setLoading(false); // Assuming 'setLoading' is a function that manages loading state
          navigate("/profile"); // Navigating to the profile page
        } catch (error) {
          // Handle errors during login
          console.error("Error signing in", error);
          setLoading(false); // Assuming 'setLoading' is a function that manages loading state
          toast.error(error.message); // Display an error message (you may use a toast library)
        }
    };

    return (
      <div>
        {/* TODO: Incorporate UI for login, such as input fields for email and password */}
        {/* TODO: You can use a toast library for displaying login pop-ups */}
      </div>
    );
}

export default index;
