import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
//Components
import Header from './components/header/Header';
import App from './pages/App/App';
import Footer from './components/footer/Footer';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Account from './pages/account/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProctectedRoute from './components/ProctectedRoute/ProctectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/account"
          element={
            <ProctectedRoute>
              <Account />
            </ProctectedRoute>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </AuthContextProvider>
  </BrowserRouter>,
);
