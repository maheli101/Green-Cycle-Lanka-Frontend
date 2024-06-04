import Dashboard from "./pages/Dashboard/Dashboard";
import Loginpage from "./pages/Loginpage/Loginpage";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Supplier from "./pages/Supplierpage/Supplier";
import EditStatus from "./pages/Supplierpage/EditStatus";




import PickupStatus from "./pages/Supplierpage/PickupStatus";
import Selectitem from "./pages/Supplierpage/Selectitem";
import Paper from "./pages/Supplierpage/Paper";
import Glass from "./pages/Supplierpage/Glass";
import Metal from "./pages/Supplierpage/Metal";






import YardHomePage from "./pages/Yard/YardHomePage";
import Pick from "./pages/Yard/Pick";
import Order from "./pages/Yard/Order";
import Updates from "./pages/Yard/Updates";

import Register from "./pages/Register/Register"

import Vehicleregister from "./pages/Vehicleregister/Vehicleregister";
import User from "./pages/userProfile/userprofile";

import BuyerSelectionPage from "./pages/Buyer/BuyerSelectionPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />

         

          
          <Route path="EditStatus" element={<EditStatus />} />
          <Route path="pickupStatus" element={<PickupStatus />} />
          <Route path="Plastic" element={<Selectitem />} />
          <Route path="Paper" element={<Paper/>} />
          <Route path="Metal" element={<Metal/>} />
          <Route path="Glass" element={<Glass/>} />
       


          <Route path="supplier" element={<Supplier />} />


          <Route path="yard" element={<YardHomePage />} />
          <Route path="pick" element={<Pick />} />
          <Route path="order" element={<Order />} />
          <Route path="update" element={<Updates />} />


          <Route path="user" element={<User />} />

          <Route path="buyer" element={<BuyerSelectionPage />} />

          <Route path="aboutus" element={<AboutUsPage />} />




        </Route>
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<Register />} />
        <Route path="vehicle" element={<Vehicleregister />} />
      </Routes>
    </Router>
  );
}

export default App;
