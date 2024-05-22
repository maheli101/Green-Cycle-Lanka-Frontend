import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pickup from "./pages/Pickup/Main-pickup";
import Start from "./pages/Start_trip/Start-trip"
import { LoadScript } from '@react-google-maps/api';
import { Star } from "@mui/icons-material";
import Welcome from "./pages/welcome-driver/welcome-driver";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    
    
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="Pickup" element={<Pickup />}/>
          <Route path="Start" element={<Start />}/>
          <Route path="Welcome" element={<Welcome />}/>


        
        </Route>
      </Routes>
    </Router>
  
  );
}

export default App;


