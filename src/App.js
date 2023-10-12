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
    // Subscribe to the authentication state changes
    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Subscribe to user data changes in Firestore
        const unsubscribeSnapshot = onSnapshot(
          doc(db, 'users', user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              dispatch(
                // Dispatch the 'setUser' action with user data
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
          <Route element={<PrivateRoutes />}>
            <Route path='/profile' element={<Profile />} />   
            <Route path='/podcasts' element={<Podcasts />} />   
            <Route path='/create-podcasts' element={<CreatePodcasts />} />   
            <Route path='/podcast/:podcastId' element={<PodcastsDetails />} />   
          </Route>
          {/* Profiles */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
