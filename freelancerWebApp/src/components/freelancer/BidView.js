import {useLocation} from 'react-router-dom';
import './BidView.css';
import { useState } from 'react';
import BidMake from './BidMake';
import Header from '../Header'
export default function BidView(){
    const [opacity,setOpacity]=useState("6");
    const [modalShow, setModalShow] = useState(false);

    const { state } = useLocation();
    const project=state;
    const card = {
        "align-self": "center",
        "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        "margin": "auto",
        "text-align": "center",
        "-ms-flex-item-align": "center",
        "font-family": "arial",
        "justify-content": "center"
      }
      
      const skillstyle = {
        "color": "grey",
        "font-size": "22px"
      }
      
      const cardbutton = {
        "border": "none",
        "outline": "0",
        "padding": "12px",
        "color": "white",
        "background-color": "blue",
        "text-align": "center",
        "cursor": "pointer",
        "width": "100%",
        "font-size": "18px",
        "margin-bottom": "0px",
        "opacity":`${opacity}`
      }
      

    return(
<>
<Header login="freelancer"/>
    <div class="container">
        <div class="flex-container">
            <div class="card" style={card}>
                <div class="card-body">
                    <h1>{project.projectName}</h1>
                    <p class="card-text">{project.projectDescription}</p>
                    {project.skillsSetList.map(skill=>{
                        return(
                        <div> 
                            <p style={skillstyle}>{skill}</p>
                        </div>
                        );
                    })}
                    <p>
                        <button class="btn btn-outline-secondary" style={cardbutton}
                         onMouseEnter={()=>setOpacity("0.6")}
                          onMouseLeave={()=>setOpacity("6") }
                           onClick={() => setModalShow(true)}>
                            Bid</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <BidMake
    show={modalShow}
    project={project}
    onHide={() => setModalShow(false)}
    />
</>
)
}