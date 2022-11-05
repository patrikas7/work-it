import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
import NewJobPage from './pages/NewJobPage';
import RegistrationPage from './pages/RegistrationPage';
import './reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/jobs/create" element={<NewJobPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
