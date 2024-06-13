import Dashboard from "./pages/Dashboard/Dashboard";
import Loginpage from "./pages/Loginpage/Loginpage";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoadScript } from '@react-google-maps/api';
import { Star } from "@mui/icons-material";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Supplier from "./pages/Supplierpage/Supplier";
import EditStatus from "./pages/Supplierpage/EditStatus";
import ViewOrders from "./pages/userProfile/ViewOrders";




import PickupStatus from "./pages/Supplierpage/PickupStatus";
import Selectitem from "./pages/Supplierpage/Selectitem";
import Paper from "./pages/Supplierpage/Paper";
import Glass from "./pages/Supplierpage/Glass";
import Metal from "./pages/Supplierpage/Metal";
import axios from "axios";







import YardHomePage from "./pages/Yard/YardHomePage";
import Pick from "./pages/Yard/Pick";
import Order from "./pages/Yard/Order";
import Updates from "./pages/Yard/Updates";

import Register from "./pages/Register/Register"

import Vehicleregister from "./pages/Vehicleregister/Vehicleregister";
import User from "./pages/userProfile/userprofile";


import BuyerSelectionPage from "./pages/Buyer/BuyerSelectionPage";
import BuyerForm from "./pages/Buyer/BuyerForm";


import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import RequestForm from "./pages/Supplierpage/RequestForm";
import MyProfile from "./pages/MyProfile";
import UserOrders from "./pages/UserOrders";
import UserPickups from "./pages/UserPickups";

import Pickup from "./pages/Pickup/Main-pickup";
import Start from "./pages/Start_trip/Start-trip";
import Welcome from "./pages/welcome-driver/welcome-driver";
import Driver_admin from "./pages/driver_admin/driver_admin";
import End from "./pages/driver_end/Driver-end";



function App() {

  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="Pickup" element={<Pickup />}/>
          <Route path="Start" element={<Start />}/>
          <Route path="Welcome" element={<Welcome />}/>
          <Route path="Driver_admin" element={<Driver_admin />}/>
          <Route path="End" element={<End />}/>

         


        


          <Route path="/home" element={<Dashboard />} />


         

          <Route path="supplier" element={<Supplier />} />
          <Route path="EditStatus" element={<EditStatus />} />
          <Route path="pickupStatus" element={<PickupStatus />} />
          <Route path="Plastic" element={<Selectitem />} />
          <Route path="Paper" element={<Paper/>} />
          <Route path="Metal" element={<Metal/>} />
          <Route path="Glass" element={<Glass/>} />
          
       


          


          <Route path="yard" element={<YardHomePage />} />
          <Route path="pick" element={<Pick />} />
          <Route path="order" element={<Order />} />
          <Route path="update" element={<Updates />} />


          <Route path="user" element={<User />} />
          <Route path="vieworder" element={<ViewOrders/>} />

          <Route path="buyer" element={<BuyerSelectionPage />} />

          <Route path="aboutus" element={<AboutUsPage />} />

          <Route path="buyerForm" element={<BuyerForm />} />
          <Route path="requestForm" element={<RequestForm />} />


          <Route path="profile" element={<MyProfile />} />
          <Route path="userorder" element={<UserOrders />} />
          <Route path="userpickup" element={<UserPickups />} />



        </Route>
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<Register />} />
        <Route path="vehicle" element={<Vehicleregister />} />
        
      </Routes>
    </Router>
  );
}

export default App;

