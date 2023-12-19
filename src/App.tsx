import './App.css';
import { AccountPage } from './pages/profilePage';
import { BookingPage } from './pages/bookingPage';
import { ErrorPage } from './pages/errorPage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { ServicesPage } from './pages/servicesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }
    , []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <ServicesPage /> : <LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {
          user && (
            <>
              <Route path="/services" element={<ServicesPage />} />
              <Route path='/mybookings' element={<BookingPage />} />
              <Route path='/myprofile' element={<AccountPage />} />
            </>
          )
        }
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
