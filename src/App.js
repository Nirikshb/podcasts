import { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/react-toastify.css";

function App() {
  useEffect(()=>{
    const authUnsubribe = onAuthStateChanged(auth, (user)=>{
      if(user) {
        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", user.uid)
        )
      }
    })  

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
