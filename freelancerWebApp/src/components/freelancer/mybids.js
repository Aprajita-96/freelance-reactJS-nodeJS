import { useEffect, useState } from "react";
// import project from "../../data/projects.json";
import BidCard from "./BidCard";
import Header from "../Header";
export default function MyBids(props) {
  const [data, setData] = useState({});
  const [projects, setProjects] = useState([]);
  var project=[]
  useEffect(()=>{
    const url = "http://localhost:5000/projects";
    fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "GET",
    }).then((response)=>response.json()).then((res) => {
      console.log(res) 
      setData(res[0]);
      setProjects(res[0].projectDetailsList)
    }).catch((err) => console.log(err));

  },[])
 

  function filterOpenBids() {
    setProjects(
      data.projectDetailsList.filter((project) => {
        return project.projectStatus == "open";
      })
    );
  }
  function filterCloseBids() {
    setProjects(
      data.projectDetailsList.filter((project) => {
        return project.projectStatus == "close";
      })
    );
  }
  function filterWonBids() {
    setProjects(
      data.projectDetailsList.filter((project) => {
        if (project.projectStatus == "close") {
          return project.allBidsOfFreelancers.filter((pro) => {
            if (
              pro.freelancerEmailId == "Aprajita" &&
              pro.projectAwarded == "true"
            ) {
              return project;
            }
          });
        }
      })
    );
  }

  return (
    <>
      <Header login="freelancer" />
      <div class="card">
        <div class="container d-flex justify-content-center mt-4">
          <div
            class="btn btn-outline-primary col-md-2 mr-2"
            onClick={() => filterOpenBids()}
            role="group"
            aria-label="..."
          >
            Open Bids
          </div>
          <div
            class="btn btn-outline-primary  col-md-2 mr-2"
            role="group"
            onClick={() => filterCloseBids()}
            aria-label="..."
          >
            Closed Bids
          </div>
          <div
            class="btn btn-outline-primary  col-md-2 mr-2"
            role="group"
            onClick={() => filterWonBids()}
            aria-label="..."
          >
            Bids won
          </div>
        </div>

        <div>
          {projects&&projects.length != 0 ? (
            projects.map((pro) => {
              return <BidCard project={pro} />;
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
