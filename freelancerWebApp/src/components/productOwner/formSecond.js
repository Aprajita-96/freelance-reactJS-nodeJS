import { useNavigate } from "react-router-dom";

export default function FormSecond(props){
const navigate=useNavigate();
    function saveDataNavigate(e){
        e.preventDefault();

        let bidDetails =
        {
          bidLastDate: e.target.form.bidLastDate.value,
          maximumBudget: e.target.form.maximumBudget.value,
          minimumBudget: e.target.form.minimumBudget.value,
    
        }
        let pro=props.project;
        pro.bidSpecsProvidedByProjectOwners=bidDetails;
        const url = "http://localhost:5000/postProject";
        fetch(url, {
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body:JSON.stringify({project:pro})
        }).then((response)=>response.json()).then((res) => { 
        console.log(res);
        navigate("/myprojects")
        }).catch((err) => console.log(err));
    }
    return(
        <>
<div class="row form-container">
      <div class="col-sm-9 personal-info">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-md-3 control-label">Max Budget ($):</label>
            <div class="col-md-8">
              <input name="maximumBudget" placeholder="Amount in $"  class="form-control" type="text" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Min Budget ($):</label>
            <div class="col-md-8">
              <input name="minimumBudget" placeholder="Amount in $"  class="form-control" type="text" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Bid Duration:</label>
            <div class="col-md-8">
              <input name="bidLastDate" placeholder="Number of Days"  class="form-control" type="number"/>
            </div>
          </div>
          <div class="form-group">
              <label class="col-md-3 control-label"></label>
              <div class="col-md-8">
              <button class="btn btn-margin btn-primary" onClick={(e)=>saveDataNavigate(e)}>Save</button>
                <span></span>
                <button class="btn btn-margin btn-warning"onClick={props.reset}>Reset</button>
              </div>
            </div>
        </form>
      </div>
    </div>

    </>
    )
}