const express = require('express');
const freelancersArray= require('./data/freelancer.json');
const projectsArray= require('./data/projects.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


let freelancer = freelancersArray;
let projects= projectsArray

app.use(bodyParser.json());

app.use(cors());
app.get('/freelancer', (req, res) => {
  res.send(freelancer);
});
app.get('/projects', (req, res) => {
  res.send(projects);
});
app.post('/makeBid', (req, res) => {
  const {project}=req.body;
  console.log(project)
  projects[0].projectDetailsList.map(pro=>{
    if(pro.projectId===project.projectId){
      return pro.allBidsOfFreelancers=project.allBidsOfFreelancers
    }
  })
  res.send(project);
});
app.post('/postProject', (req, res) => {
  const {project}=req.body;
  console.log(project)
  projects[0].projectDetailsList.push(project);
  res.send(projects);
});
app.put('/acceptBid', (req, res) => {
  const {name}=req.body;
  const {freelancer}=req.body;
  console.log(freelancer)
  console.log(name)
  projects[0].projectDetailsList.map(pro=>{
    if(pro.projectName===name){
      pro.allBidsOfFreelancers.map(freelan=>{
        if(freelan.freelancerEmailId===freelancer){
          return freelan.projectAwarded=true;
        }
      })
      return pro.projectStatus="close";
    }
  });
  console.log(projects)
  res.send(projects)
});

// app.get('/savedWebPages', (req, res) => {
//   res.send(savedWebpages);
// });

// app.post('/', (req, res) => {
//   console.log("req", req);
//   webPageData = req.body;

//   savedWebpages.push(webPageData);

//   console.log("req body", req.body);
//   res.send(req.body);
// });

const port = 5000; // or any other port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});