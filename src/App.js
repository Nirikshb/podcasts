import { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/react-toastify.css";
import {useDispatch} from "react-redux";


function App() {
 
  const dispatch = useDispatch();

  useEffect(()=>{
    const authUnsubribe = onAuthStateChanged(auth, (user)=>{
      if(user) {
        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc)=>{
            if(userDoc.exists()){
              const userData = userDoc.data();
              dispatchEvent(
                setUser({
                  name:userData.name,
                  email:userData.email,
                  uid:user.uid,
                  profilePic:userData.profilePic,
                })
              );
            }
          },
          (error)=>{
            console.log("Error fetching user data", error);
          }
        );

        return () =>{
          unsubscribeSnapshot();
        };
      }
    });

    return authUnsubribe();
      
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<PrivateRoutes />} />
          {/* Profile
          Podcasts */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
