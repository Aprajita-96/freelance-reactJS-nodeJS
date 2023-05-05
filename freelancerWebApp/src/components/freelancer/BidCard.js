import { useNavigate } from "react-router-dom"

export default function BidCard(props){
    const navigate=useNavigate();
    function goTodetailsPage(project){
        navigate("/projectDetailComponent",{state:project})
    }
    return (
        <>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{ props.project.projectName}</h5>
                    <p class="card-text">{ props.project.projectdescription }</p>

                    <button class="card-link btn btn-primary" onClick={()=>goTodetailsPage(props.project)}>

                    Details
                    </button>
                </div>
            </div>
        </>
    )
}