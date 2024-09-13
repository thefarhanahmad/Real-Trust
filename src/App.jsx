import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

import HomePage from './Pages/Property/HomePage';


import MainContact from './Pages/Contact/MainContact';
import ForRent from './Pages/Rent/ForRent';
import FAQs from './Pages/FAQs/FAQs';
import Gallery from './Pages/Gallery/Gallery';
import MainBlog from './Pages/Blog/MainBlog';
import Login from './Auth/Login/Login';
import UserProfile from './Profile/User/UserProfile';
import OwnerProfile from './Profile/Owner/OwnerProfile';
import ScheduleConfirmation from './Pages/ScheduleForm/ScheduleConfirmation';
import ForSale from './Pages/Sale/ForSale';

import Detail from './Pages/PropertyDetail/Detail';
import AddProperty from './Profile/Owner/Properties/AddProperty/AddProperty';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<HomePage />} />
        
        <Route path="/rent" element={<ForRent />} />
        <Route path="/sale" element={<ForSale />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<MainBlog />} />

        {/* Auth   */}
        <Route path="/login" element={<Login />} />


        {/* UserProfile */}
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/ownerprofile" element={<OwnerProfile />} />

        <Route path="/scheduleconfirmation" element={<ScheduleConfirmation />} />
        
        <Route path="/property/:slug" element={<Detail />} />
        <Route path="/add-property" element={<AddProperty />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
