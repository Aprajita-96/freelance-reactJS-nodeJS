import { useNavigate } from "react-router-dom";

export default function ViewBids(props) {
  const navigate=useNavigate();
  const project = props.project;
  const bidsInfromation = project["bidSpecsProvidedByProjectOwners"];
  project.skillsSetList.map((skill, index) => {
    project.skillsSetList[index] = skill + " ";
  });
  let biders = project["allBidsOfFreelancers"];
  let awardedBid=[];
  biders.map(bid=>{
    if(bid.projectAwarded== true){
      awardedBid.push(bid);
    }
  })
  console.log("")
  function acceptBid(props,bid){
    let projectName=props.project.projectName
    const url = "http://localhost:5000/acceptBid";
    fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
      body:JSON.stringify({name:projectName,freelancer:bid.freelancerEmailId})
    }).then((response)=>response.json()).then((res) => { 
    console.log(res);
    navigate("/myprojects")
    }).catch((err) => console.log(err));
  }
  return (
    <>
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
                <div></div>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div class="text-center">
            <h3>Bids</h3>
          </div>
          {awardedBid.length==0 ? biders.map((bid) => {
            return (
              <div>
                <div class="card mt-3">
                  <div class="card-body projectDetail">
                    <table class="table">
                      <tr>
                        <th>
                          <p>Freelancer Email:</p>
                        </th>
                        <td>
                          <h4 class="card-title">{bid.freelancerEmailId}</h4>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p> Bided Amounnt:</p>
                        </th>
                        <td>
                          <p class="card-text">{bid.bidAmount}</p>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p> Proposed Completion Days: </p>
                        </th>
                        <td>
                          <p class="card-text"> {bid.proposedCompletionDate}</p>
                        </td>
                      </tr>
                    </table>

                    <div class="container">
                      <button class="btn btn-primary text-white" onClick={()=>acceptBid(props,bid)}>Accept</button>
                      <button
                        class="btn btn-warning text-white"
                        id="details"
                        disabled
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }):awardedBid.map((awBid) => {
              return (
                <div>
                  <div class="card mt-3">
                    <div class="card-body projectDetail">
                      <table class="table">
                        <tr>
                          <th>
                            <p>Freelancer Email:</p>
                          </th>
                          <td>
                            <h4 class="card-title">{awBid.freelancerEmailId}</h4>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p> Bided Amounnt:</p>
                          </th>
                          <td>
                            <p class="card-text">{awBid.bidAmount}</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p> Proposed Completion Days: </p>
                          </th>
                          <td>
                            <p class="card-text"> {awBid.proposedCompletionDate}</p>
                          </td>
                        </tr>
                      </table>
  
                      <div class="container ">
                        <button
                          class="btn btn-warning text-white"
                          id="details"
                          disabled
                        >
                          Awarded
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );  
        })
      }
        </div>
      </div>
    </>
  );
}
