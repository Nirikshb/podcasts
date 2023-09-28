import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth functions
import { onSnapshot, doc } from 'firebase/firestore'; // Import Firestore functions
import { setUser } from './redux/userActions'; // Import your setUser action
import SignUp from './components/SignUp'; // Import your SignUp component
import Profile from './components/Profile'; // Import your Profile component
import PrivateRoutes from './components/PrivateRoutes'; // Import your PrivateRoutes component
import { auth, db } from './firebase'; // Import your Firebase configuration objects


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribeSnapshot = onSnapshot(
          doc(db, 'users', user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              dispatch(
                setUser({
                  name: userData.name,
                  email: userData.email,
                  uid: user.uid,
                  profilePic: userData.profilePic,
                })
              );
            }
          },
          (error) => {
            console.log('Error fetching user data', error);
          }
        );

        return () => {
          unsubscribeSnapshot();
        };
      }
    });

    return () => {
      authUnsubscribe();
    };
  }, []);


  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<PrivateRoutes />} />
          {/*Profiles*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
