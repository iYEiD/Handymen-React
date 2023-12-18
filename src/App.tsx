import './App.css';
import { AccountPage } from './pages/profilePage';
import { BookingPage } from './pages/bookingPage';
import { ErrorPage } from './pages/errorPage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { ServicesPage } from './pages/servicesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path='/mybookings' element={<BookingPage />} />
        <Route path='/myprofile' element={<AccountPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
