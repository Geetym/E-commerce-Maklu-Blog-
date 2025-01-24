import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './component/Hero';
import SignUpPage from './component/SignUp';
import LoginPage from './component/LoginPage';
import NewArrivals from './component/NewArriavals';
import Allproduct from './component/Allproduct';
import Endofseason from './component/Endofseason';
import Castronews from './component/Castronews';
import CustomerBenefits from './component/Customerbenefits';
import Footersection from './component/Footersection';
import MastercardPay from './component/Mastercardpay';
import Vervecardplay from './component/Vervecardplay';
import Visacard from './component/Visacard';
import Americanexpress from './component/Americanexpress';

const App = () => {
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <NewArrivals />
              <Endofseason />
              <Castronews />
              <CustomerBenefits />
              <Footersection />

            </>
          } 
        />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path='/viewallproducts' element={<Allproduct />} />
        <Route path='/mastercard' element={<MastercardPay />} />
        <Route path='/vervecard' element={<Vervecardplay />} />
        <Route path='/visacard' element={<Visacard />} />
        <Route path='/americanexpresscard' element={<Americanexpress />} />
      </Routes>
    </>
  );
};

export default App;

