import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route element={<PrivateRoutes />} />
          {/* Profile
          Podcasts */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
