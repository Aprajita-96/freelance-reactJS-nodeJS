import { useEffect, useState } from 'react';
import './form.css'
export default function ProjectDetailForm(props){
    const [skills,setSkill]=useState(["java"]);
    var skilltemp="";

    
    function addSkill(){
        var skillarr=[]
        skillarr.push(skills)
        skillarr.push(skilltemp)
        if(skilltemp!=""){
            setSkill(skillarr)
        }
    }
    function removeSkill(skill) {
        var skillarr=[]
        skillarr = skills.filter(e => {
          return e !== skill
        })
        setSkill(skillarr)
      }
    function updateParam(e){
        e.preventDefault();
        skilltemp=e.target.value;
    }
    function reset(e){
    setSkill([])
    e.target.form.reset()
    }
    function saveData(e){
        const projectDetailsList={
            "skillsSetList":skills,
            "projectName":e.target.form.projectName.value,
            "projectStatus":"open",
            "allBidsOfFreelancers":[],
            "projectDescription":e.target.form.projectDescription.value,
            "projectCompletionDate":e.target.form.projectCompletionDate.value,
            "projectPreference":e.target.form.preference.value,
            "projectOwnerEmailId":"aprajitaPO@gmail.com",
            "projectLocation":e.target.form.projectLocation.value,

        }
        props.next(projectDetailsList)
    }
    return(
        <>
        <div class="row form-container">
        <div class="col-sm-9 personal-info">
          <form class="form-horizontal" >

            <div class="form-group">
              <label class="col-md-3 control-label">Domain:</label>
              <div class="col-md-8">
                <select class="form-control" name="domain" id="domain">
                  <option>IT</option>
                  <option>EM</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Project Name:</label>
              <div class="col-md-8">
                <input name="projectName" class="form-control" type="text" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Project Description:</label>
              <div class="col-md-8">
                <textarea class="form-control" id="projectDescription" name="projectDescription"
                  rows="3"></textarea>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 ">Skills:</label>
              <div class="col-sm-8">
                <div class="skill-container">
                  <input id="skill" name="skill" type="text" onChange={(e)=>updateParam(e)}
                    placeholder="Add Skills required for Project" class="form-control"/>
                  <button type="button" onClick={()=>addSkill()} class="btn btn-primary">Add_Skill</button>
                </div>
              </div>
                {skills.map(skill=>{
                    return(
                    <div>
                    <h3><span style={{"color":"black"}}class="badge badge-pill badge-info">
                        {skill}
                        <button onClick={()=>removeSkill(skill)}  type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </span></h3>
                    </div>
                    );
                })}
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Completion Date:</label>
              <div class="col-md-8">
                <input type="date" name="projectCompletionDate"  class="form-control"
                  placeholder="Date of projectCompletion" id="completionDate"/>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Location:</label>
              <div class="col-md-8">
                <input name="projectLocation" class="form-control" type="text"/>
              </div>
            </div>

            <div class="form-group">
              <label for="preference" class="col-md-3 control-label"><i class="fas fa-user-tag"></i> Preference</label>
              <div class="col-md-8">
                <select class="form-control" id="firstName" name="preference">
                  <option value="">Select Preference</option>
                  <option value="Remote">Remote</option>
                  <option value="Onsite">Onsite</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label"></label>
              <div class="col-md-8">
                <button type="button" class="btn btn-margin btn-primary"
                 onClick={(e)=>saveData(e)}>Save Changes</button>
                <span></span>
                <button type="reset" class="btn btn-margin btn-warning"onClick={(e)=>reset(e)} value="Cancel">Reset</button>
              </div>
            </div>
        </form>
        </div>
      </div>
    </>
    )
}