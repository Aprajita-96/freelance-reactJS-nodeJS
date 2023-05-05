import ProjectOwnerBidCard from "./ProjectOwnerBidCard";
import project from '../../data/projects.json'
import { useState, useEffect } from "react";
import Header from '../Header'
import { useNavigate } from "react-router-dom";


export default function MyProjects(props){
    const [data, setData] = useState({});
  const [projects, setProjects] = useState([]);
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
    const navigate=useNavigate();



function filterOpenBids(){
     setProjects(data.projectDetailsList.filter(project=>{
        return project.projectStatus==="open"
    }));
}
function filterCloseBids(){
    setProjects(data.projectDetailsList.filter(project=>{
        return project.projectStatus==="close"
    }));
    console.log(projects)
}
function addProject(){
navigate("/addProjects")
}
    return(
        <>
            <Header login=""/>
            <div class="container mt-3 mr-3">
                <div class="btn btn-outline-primary col-md-3 mr-2" role="group" onClick={()=>filterOpenBids()} aria-label="...">Open
                    Projects</div>
                <div class="btn btn-outline-primary  col-md-3 mr-2" role="group" onClick={()=>filterCloseBids()}  aria-label="...">
                    Closed Projects</div>
                <div class="btn btn-outline-primary  col-md-3" role="group" aria-label="..." onClick={()=>addProject()}>
                    Add Projects</div>
            </div>
            <div class="container">
            {projects.map(pro=>
            {return(<ProjectOwnerBidCard project={pro}/>);
            })}
            </div>
        </>
    );
}