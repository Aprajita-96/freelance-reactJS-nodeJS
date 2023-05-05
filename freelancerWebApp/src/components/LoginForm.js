import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';

function LoginForm(props) {
  const[email, handleOnChangeEmail] = useState("");
  const[password,handleOnChangePassword]=useState("")
  const navigate = useNavigate();

  function loginUser(){
    if(email=="aprajita@gmail.com"&&password=="apps@123"){
      localStorage.setItem("isLoginas","freelancer");
      navigate("/");
    }
    if(email=="aprajitaPO@gmail.com"&&password=="apps@123"){
      localStorage.setItem("isLoginas","productOwner");
      navigate("/");
    }
  }
  return (
<>
<Header login="loginPage"/>
<section >
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-4">
        <img src="img2.png"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Login Here:</p>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" value={email} onChange={(e)=>handleOnChangeEmail(e.target.value)} class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" onChange={ (e)=>handleOnChangePassword(e.target.value) } class="form-control form-control-lg"
              placeholder="Enter password"  />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class=" login-button btn btn-primary btn-lg"
              onClick={loginUser}>Login</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
</>
  );
}

export default LoginForm;
