import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import { useEffect } from "react";
import ViewBids from "../productOwner/ViewBids";
export default function ProjectCardView(props) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const project = state;
  var login = "";
  const bidsInfromation = project["bidSpecsProvidedByProjectOwners"];

  project.skillsSetList.map((skill, index) => {
    project.skillsSetList[index] = skill + " ";
  });
  login = localStorage.getItem("isLoginas");

  console.log(project.skillsSetList[0]);
  function gotoBidComponent() {
    navigate("/cardView", { state: project });
  }
  if (login == "productOwner") {
    return (
      <>
        <Header login="" />
        <ViewBids project={project}></ViewBids>
      </>
    );
  } else {
    return (
      <>
        <Header login="freelancer" />
        <div class="container mt-5">
          <div class="card">
            <div class="card-body projectDetail">
              <div class="table-responsive">
                <table class="table">
                  <tr>
                    <th>
                      <h4 class="card-title">Project Name:-</h4>
                    </th>
                    <td>
                      <h4>{project.projectName}</h4>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p class="card-text">Project Description:-</p>
                    </th>
                    <td>
                      <p>{project.projectDescription}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p class="card-text">Skills Required:-</p>
                    </th>
                    <td>
                      <p>{project.skillsSetList}</p>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <p class="card-text">Maximum Budget (in $):-</p>
                    </th>
                    <td>
                      <p>{bidsInfromation.maximumBudget}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p class="card-text">Minimum Budget (in $):-</p>
                    </th>
                    <td>
                      <p>{bidsInfromation.minimumBudget}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p class="card-text">Project Completion Date:-</p>
                    </th>
                    <td>
                      <p>{project.projectCompletionDate}</p>
                    </td>
                  </tr>
                  <div>
                    <button
                      onClick={() => gotoBidComponent()}
                      class="btn btn-primary text-white"
                    >
                      Bid
                    </button>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
