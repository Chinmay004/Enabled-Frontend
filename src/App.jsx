import Main from "./Components/Product/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./Components/Product/ProductPage";
import ProductDetails from "./Components/Product/ProductDetails";
import AddProduct from "./Components/Product/AddProduct";
import Signup from "./Components/Auth/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Auth/Login";
import CartPage from "./Components/CartPage";
import Billing from "./Components/Billing/Billing";
import OrderPage from "./Components/Orders/OrderPage";
import Logout from "./Components/Auth/Logout";
import Verify from "./Components/Verify";
import Profile from "./Components/Profile";
import AdminRoute from "./Components/AdminRoute";
import AllOrders from "./Components/Orders/AllOrders";
import EditProducts from "./Components/Product/EditProducts";
import DonationDistribution from "./Components/ImpactOutcomes/DonationDistribution";
import OnlineSupportGroup from "./Components/ImpactOutcomes/OnlineSupportGroup";
import OnlineWebinarSessions from "./Components/ImpactOutcomes/OnlineWebinarSessions";
import PatientConsultationSupport from "./Components/ImpactOutcomes/PatientConsultationSupport";
import PatientJourneyDocumentary from "./Components/ImpactOutcomes/PatientJourneyDocumentary";
import PediatricTracheostomyCareBooklet from "./Components/ImpactOutcomes/PediatricTracheostomyCareBooklet";
import PrivateConsultationBookingServices from "./Components/ImpactOutcomes/PrivateConsultationBookingServices";
import ProBonoConsultingProject from "./Components/ImpactOutcomes/ProBonoConsultingProject";
import Research from "./Components/ImpactOutcomes/Research";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/productDetails" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
        <Route path="/addProduct" element={<AdminRoute><AddProduct /> </AdminRoute>} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/inventory" element={<AdminRoute><EditProducts /></AdminRoute>} />
        <Route path="/edit-products" element={<AdminRoute><EditProducts /></AdminRoute>} />
        <Route path="/donation-distribution" element={<DonationDistribution />} />
        <Route path="/online-support-group" element={<OnlineSupportGroup />} />
        <Route path="/online-webinar-sessions" element={<OnlineWebinarSessions />} />
        <Route path="/patient-consultation-support" element={<PatientConsultationSupport />} />
        <Route path="/patient-journey-documentary" element={<PatientJourneyDocumentary />} />
        <Route path="/pediatric-tracheostomy-care-booklet" element={<PediatricTracheostomyCareBooklet />} />
        <Route path="/private-consultation-booking-services" element={<PrivateConsultationBookingServices />} />
        <Route path="/pro-bono-consulting-project" element={<ProBonoConsultingProject />} />
        <Route path="/research" element={<Research />} />
        {/* <Route path="/srecipes2" element={<PrivateRoute><RecipeList2 /></PrivateRoute>} /> */}
        <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
        <Route path="/billing" element={<PrivateRoute><Billing /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><OrderPage /></PrivateRoute>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/allorders" element={<AllOrders />} />
      </Routes>
    </Router>
  );
}
export default App;
