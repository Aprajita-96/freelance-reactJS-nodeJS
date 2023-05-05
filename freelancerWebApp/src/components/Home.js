import '../home.css';
import React, { useState, useEffect } from 'react';
import NoLogin from './NoLogin';
import FLogin from './freelancer/FreelancerDashboard';
import Header from './Header';
import { useNavigate,Navigate } from "react-router-dom";
import freelancerArray from '../data/freelancer.json';
import projectArray from '../data/projects.json';

export default function App(){
  const navigate = useNavigate();
const[isLoginas,setLogin]=useState("");
useEffect(() => {
 var isLogin=localStorage.getItem("isLoginas");
  if(isLogin!=null || isLogin!=""){
    setLogin(isLogin);
  }
});
function goToLogin(){
  navigate("/register",{replace:true})
}


if(isLoginas==null || isLoginas==""){  return (
  <>
    <Header login="home"/>
    <NoLogin/>
    <p class="TopFreelancers">Top Freelancers</p>
    <div class="container">
        <div class="row">
            {freelancerArray.map(freelancer => {
            console.log(freelancer)
            return(
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                  <div class="picture">
                      <img class="img-fluid" src="avatar.jpg"/>
                  </div>
                  <div class="team-content">
                  <h3 class="name">{freelancer.freelancerName}</h3>
                  <h4 class="title">{freelancer.freelancerEmail}</h4>
                  </div>
                  <button class="btn btn-primary" onClick={goToLogin}>Signup to contact</button>
              </div>
            </div>
              );
            })}
        </div>
    </div>
    <p class="TopProjects">Top Projects</p>
<div class="container">
  <div class="row">
    {projectArray[0].projectDetailsList.map(project => {
      return(<div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="project project-info">
        <div class="shape">
          <div class="shape-text">
            top
          </div>
        </div>
        <div class="project-content">
          <h3 class="lead">
            {project.projectName}
          </h3>
          <p class="descriptiontext">{project.projectDescription}</p>
          <button class="btn btn-primary" onClick={goToLogin}>Read More..</button>
        </div>
      </div>
    </div>); 
    })};
  </div>
</div>
  </>
  );
}else if(isLoginas=="freelancer"){
    return(
      <Navigate to="/freelancer" replace/>
    );
    
  }else{
    return(
      <Navigate to="/productOwnerDashBoard" replace/>
    )
  }


}
