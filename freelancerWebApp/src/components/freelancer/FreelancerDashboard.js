import Header from "../Header";
import HomeJumbotron from "../HomeJumbotron";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from 'axios';

export default function FreelancerDashboard(props) {
  const [projectArray, setProject] = useState([]);
  const navigate = useNavigate();
  const url = "http://localhost:5000/projects";
  fetch(url, {
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
    // body:JSON.stringify({emp_no:emp_num})
  }).then((response) => response.json()).then((data) => setProject(data)).catch((err) => console.log(err));

  function goToCardComponent(project) {
    console.log(project);
    navigate("/projectDetailComponent", { state: project });
  }
  return (
    <>
      <Header login="freelancer" />
      <HomeJumbotron />
      <p class="TopProjects">Projects</p>

      <div class="container">
        {projectArray.length != 0 ? (
          projectArray[0].projectDetailsList.map((project) => {
            return (
              <div class="card-holder">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">
                      <b>{project.projectName}</b>
                    </h3>
                    <p class="card-text">{project.projectDescription}</p>
                    {/* <!-- <p class="card-text1" style="color: blue">{{project.skillsSetList}}</p> --> */}
                    <button
                      class="card-link btn btn-primary"
                      onClick={() => goToCardComponent(project)}
                    >
                      Details
                    </button>
                    {/* <!-- <button class="card-link btn btn-warning">Bid</button>  --> */}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Projects in the database</h1>
        )}
      </div>
    </>
  );
}
