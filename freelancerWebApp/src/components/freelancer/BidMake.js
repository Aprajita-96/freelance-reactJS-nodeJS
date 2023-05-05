import {Modal,Button, InputGroup} from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function BidMake(props){
    const navigate=useNavigate();
    const [amount,setAmount]=useState(0);
    const [duration,setDuration]=useState(0);
    const inputcontainer = {
        "display": "-ms-flexbox", /* IE10 */
        "display": "flex",
        "width": "100%",
        "margin-bottom": "15px"
      }
      
      const icon= {
        "padding": "10px",
        "background": "dodgerblue",
        "color": "white",
        "min-width": "50px",
        "text-align": "center"
      }
      
      const inputfield= {
        "width": "100%",
        "padding": "10px",
        "outline": "none"
      }
      
    //   constinput-field:focus {
    //     border: 2px solid dodgerblue;
    //   }
      
      /* Set a style for the submit button */
      const btn= {
        "background-color": "dodgerblue",
        "color": "white",
        "padding": "15px 20px",
        "border": "none",
        "cursor": "pointer",
        "width": "100%",
        // "opacity": "0.9",
      }
      
    //   .btn:hover {
    //     opacity: 1;
    //   }  
    function postBid(props){
    let allBidsOfFreelancers={
      "freelancerEmailId":"aprajita@gmail.com",
      "proposedCompletionDate":duration,
      "projectAwarded":false,
      "bidAmount":amount
    }
    let projectTemp=props.project;
    projectTemp.allBidsOfFreelancers.push(allBidsOfFreelancers);
    const url = "http://localhost:5000/makeBid";
    fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body:JSON.stringify({project:projectTemp})
    }).then((response)=>response.json()).then((res) => { 
    console.log(res);
    props.onHide()
     navigate("/mybids");
    }).catch((err) => console.log(err));

    }
    return (
        // style={{"max-width:500px;margin:auto"}} 
        
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Enter Bid Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form >
            <div style={inputcontainer}>
                <div style={icon}>
                    <h3><i className="fa fa-dollar"></i></h3>
                </div>
                <input style={inputfield} type="text" placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)}  name="amount"/>
            </div>

            <div style={inputcontainer}>
                <div style={icon}>
                    <h3><i className="fa fa-clock-o"></i></h3>
                </div>
                <input style={inputfield} type="text" placeholder="Completion days" onChange={(e)=>setDuration(e.target.value)}  name="duration"/>
            </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button style={btn} onClick={()=>postBid(props)}>Submit</button>
          </Modal.Footer>
        </Modal>
      );
}