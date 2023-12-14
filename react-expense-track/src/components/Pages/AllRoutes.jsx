import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../../context/PrivateRoute';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import VarifyEmail from '../Auth/VarifyEmail';
import CompleteProfilePage from '../CompleteProfile/CompleteProfilePage';
import Expenses from './Expenses/Expenses';
import Home from './Home'

const AllRoutes = () => {
  const isLoginPage = useSelector((state) => state.auth.isLoginPage);
  const IdToken = useSelector(state=>state.auth.IdToken)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={isLoginPage ? <Login /> : <Signup />} />
      <Route path="/completeProfile" element={<CompleteProfilePage />} />
      <Route path="/VarifyEmail" element={<VarifyEmail />} />
      <Route
        path="/expenses"
        element={
          <PrivateRoute IdToken={IdToken}>
            <Expenses />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes