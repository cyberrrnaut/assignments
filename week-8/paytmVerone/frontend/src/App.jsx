


import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import {ProtectedRoute} from './components/ProtectedRoute';

import {Signin} from "./pages/Signin"
import {Signup} from "./pages/Signup"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"

import { isAuthenticated } from './components/authService';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sendmoney"
          element={
            <ProtectedRoute>
              <SendMoney />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />
          }
        />
        {/* Add a fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
