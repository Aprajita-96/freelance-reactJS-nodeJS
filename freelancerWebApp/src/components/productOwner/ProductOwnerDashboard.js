import Header from '../Header';
import HomeJumbotron from '../HomeJumbotron';
import freelancers from '../../data/freelancer.json'
export default function ProductOwnerDashboard(props){
    freelancers.map((f,i)=>{
        f.skills.map((skill,index)=>{
            f.skills[index]=skill+" "
        })
    })
    return(
       <>
        <Header login=""/>
        <HomeJumbotron/>
        {freelancers.map(freelancer=>{
            return(
                <div class="card">
                <div class="card-body row">
                    <div class="col-md-2">
                        <img style={{height: "150px",width:"150px"}} src="avatar.jpg" alt="freelancer"/>
                    </div>

                    <div class="col-md-10">
                        <h5 class="card-title">{freelancer.freelancerName}</h5>

                        <p class="card-text">{freelancer.freelancerEmail}</p>


                        <p class="card-text" style={{color:"blue"}}>{freelancer.skills}</p>

                        <button class="card-link btn btn-primary"
                        disabled>Details</button>

                        <button class="card-link btn btn-warning"
                        disabled>Invite</button>
                    </div>
                </div>
                </div>
            );
        })}
       </>
    )
}