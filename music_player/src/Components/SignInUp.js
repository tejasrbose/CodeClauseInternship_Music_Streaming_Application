import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import {toast} from 'react-toastify';
import '../Style/SignInUp.scss';
const SignInUp = () => {
  const toggleSignUp = () => {
    document.querySelector('.cont').classList.toggle('s--signup');
  };

   const [user, setUser]=useState({});
  useEffect(() => {
    // Add the event listener
    const imgBtn = document.querySelector('.img__btn');
    if (imgBtn) {
      imgBtn.addEventListener('click', toggleSignUp);
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (imgBtn) {
        imgBtn.removeEventListener('click', toggleSignUp);
      }
    };
  }, []);

  const SignUp=(data)=>{
    if(data.userId && data.userName && data.passWord)
      {
         axios.post(`${base_url}/addaudio`).then(
          (response) => {
            console.log(response);
            toast.success("Song Added Successfully", { position: "top-center" });
            
          },
          (error) => {
            console.log(error);
            toast.error("Something went Wrong!!", { position: "top-center" });
          }
         );
      }
      else{
        console.log("Invalid data. Please fill in all fields.");
        toast.warning("Invalid data. Please fill in all fields.", { position: "top-center" });
      }
    } 
  

  return (
    <div>
      <br />
      <br />
      <div className="cont">
        <div className="form sign-in">
          <h2>Welcome</h2>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit">
            Sign In
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div className="img__text m--in">
              <h3>If you already have an account, just sign in.</h3>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Create your Account</h2>
            <label>
              <span>Name</span>
              <input type="text"
               name="userId"
               id="userId"
               onChange={(e) => setUser({ ...user, userId: e.target.value })}
              />
            </label>
            <label>
              <span>Email</span>
              <input type="email"
              name="userName"
              id="userName"
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              />
            </label>
            <label>
              <span>Password</span>
              <input type="password" 
               name="passWord"
               id="passWord"
               onChange={(e) => setUser({ ...user, passWord: e.target.value })}
              />
            </label>
            <button type="button" className="submit" >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default SignInUp;
