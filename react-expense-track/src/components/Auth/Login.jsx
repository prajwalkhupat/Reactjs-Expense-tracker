import axios from 'axios';
import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authActions } from '../../store/AuthSlicer';

const Login = () => {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()


  const navigate = useNavigate()
   const [userData, setUserData] = useState({
     email: "",
     password: "",
   });

  
  
   const handleChange = (e) => {
       const { placeholder, value } = e.target;
       setUserData({ ...userData, [placeholder]: value });
  };
     const handleSubmit = async (e) => {
       e.preventDefault();

        try {
          const res = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkixPtmAYpRieik_IySWFQgHiBpWJZrt4",
            {
              email: userData.email,
              password: userData.password,
              returnSecureToken: true,
            }
          );
            
          toast("User Login successfully");
          dispatch(authActions.login(res.data.idToken));
        navigate("/VarifyEmail");
        } catch (e) {
          toast(e.response.data.error.message);
        }
        document.querySelector("form").reset();
     };

  return (
    <div>
      <h1 className="display-1 border-bottom border-3 border-dark">Login</h1>
      <div className="m-auto my-5 w-25 p-3 shadow-lg rounded-3">
        <form
          onSubmit={handleSubmit}
          className="form"
        >
          <div className=" form-floating mb-3">
            <input
              type="email"
              className="form-control"
              onChange={handleChange}
              placeholder="email"
              required
            />
            <label>Email address</label>
          </div>

          <div className=" form-floating mb-3">
            <input
              type="password"
              className="form-control"
              onChange={handleChange}
              placeholder="password"
              required
            />
            <label>Password</label>
          </div>

          <input type="submit" className=" btn btn-secondary" value="Login" />

          <button id='btn'
            className=" m-3 text-primary border-0"
            onClick={() => dispatch(authActions.signupPage())}
          >
            New User?
          </button>
        </form>
        <button id='btn'
          className="mb-3 text-primary border-0"
          onClick={() => dispatch(authActions.showForgotPasswordModal())}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
}

export default Login