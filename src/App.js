import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from "./pages/HomePage";
import ServiceDetail from "./pages/ServiceDetail";
import Banner from './components/banner/Banner';
import Doctors from './components/doctors/Doctors';
import Facilities from './components/facilities/Facilities';
import Partners from './components/partners/Partners';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Care from './pages/Care';
import Health from './pages/Health';
import Exam from './pages/Exam';
import Lab from './pages/Lab';
import Contact from './pages/Contact';
import Login from './pages/Login';
import LearnMore from './pages/LearnMore';
import FacilitiesDetails from './pages/FacilitiesDetails';
import DoctorsDetails from './pages/DoctorsDetails';
import RequestOpinion from './pages/RequestOpinion';
import Booking from './pages/Booking';
import SignUp from './pages/SignUp';
import Register from "./pages/Register"; // تأكد من المسار الصحيح
import DoctorContactPage from "./pages/DoctorContactPage";
import '@fontsource/roboto'; // خط Roboto لمظهر MUI الاحترافي
import ScrollToTop from "./components/scrollFooter/ScrollToTop"; // ✅ استيراد
import UserMessages from './pages/AdminMessages'; // تأكد من المسار الصحيح
import AdminMessages from './pages/AdminMessages';




function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Doctors />
      <Partners />
      <Facilities />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
            <ScrollToTop /> {/* ✅ إدراج هنا */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/care" element={<Care />} />
        <Route path="/health" element={<Health />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/facilities-details" element={<FacilitiesDetails />} />
        <Route path="/doctors-details" element={<DoctorsDetails />} />
        <Route path="/request-opinion" element={<RequestOpinion />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors-contact" element={<DoctorContactPage />} />
        <Route path="/admin-messages" element={<AdminMessages />} />






      </Routes>
    
      <Footer />
    </Router>
   
  );
}

export default App;
