import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './Component/Mainpage';
import Jazzshow from './Component/Jazzshow';
import Movie1 from './Component/Movie1';
import Movie2 from './Component/Movie2';
import Movie3 from './Component/Movie3';
import Movie4 from './Component/Movie4';
import Movie5 from './Component/Movie5';
import Movie6 from './Component/Movie6';
import PrivacyPolicy from './Component/PrivacyPolicy';
import AboutUs from './Component/AboutUs';
import TermsAndConditions from './Component/TermsAndConditions';
import CopyrightPage from './Component/CopyrightPage';
import CustomerInput from './Component/CustomerInput';
import Background from './Component/Background';
import PaymentPage from './Component/PaymentPage';
import AdminPage from './Component/AdminPage';
import AuthenticationPage from './Component/AuthenticationPage';
import CheckoutForm from './Component/CheckoutForm';
import './App.css';

function NotFoundPage() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path='/Mainpage' element={<Mainpage />} />
          <Route path='/AdminPage' element={<AdminPage />} />
          <Route path='/AuthenticationPage' element={<AuthenticationPage />} />
          <Route path='/PaymentPage' element={<PaymentPage />} />
          <Route path='/Jazzshow' element={<Jazzshow />} />
          <Route path="/background" element={<Background />} />
          <Route path='/movie1' element={<Movie1 />} />
          <Route path='/movie2' element={<Movie2 />} />
          <Route path='/movie3' element={<Movie3 />} />
          <Route path='/movie4' element={<Movie4 />} />
          <Route path='/movie5' element={<Movie5 />} />
          <Route path='/movie6' element={<Movie6 />} />
          <Route path='/CustomerInput' element={<CustomerInput />} />
          <Route path='/CheckoutForm' element={<CheckoutForm />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='/CopyrightPage' element={<CopyrightPage />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
