// ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './authService';


export const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
};


