import { useNavigate } from "react-router-dom";

export default function ProjectOwnerBidCard(props){
    const navigate=useNavigate();
    const card={
        "box-shadow": "2px 2px 2px 1px rgba(0, 0, 0, 0.55)"

    }
    function goTodetailsPage(project){
        navigate("/projectDetailComponent",{state:project})
    }
    return(
        <>
            <div class="card conatiner mt-3" style={card}>
                <div class="card-body">
                    <h5 class="card-title">{ props.project.projectName }</h5>
                    <p class="card-text">{ props.project.projectDescription }</p>
                    <button class="card-link btn btn-primary"
                    onClick={()=>goTodetailsPage(props.project)}>
                    Details
                    </button>
                </div>
            </div>
        </>
    )
}