import { useNavigate,Navigate } from "react-router-dom";

export default function HeaderNav(props){
const navigate = useNavigate();

function logout(){
    localStorage.clear();
        navigate("/",{replace:true})
    }

if(props.login=="loginPage"){
    return(
    <ul>
    <li class="navli"><a class="nav-link" href="/">Home</a></li>
    <li class="navli"><a class="nav-link" href="/register">Register</a></li>
    <li class="navli"><a class="nav-link" href="/">About us</a></li>
    </ul>
    );
}else if(props.login=="register"){
    return(
    <ul>
    <li class="navli"><a class="nav-link" href="/">Home</a></li>
    <li class="navli"><a class="nav-link" href="/Login">Login</a></li>
    <li class="navli"><a class="nav-link" href="/">About us</a></li>
    </ul>
    );
}else if(props.login=="home"){
    return(
        <ul>
        <li class="navli"><a class="nav-link" href="/">Home</a></li>
        <li class="navli"><a class="nav-link" href="/register">Register</a></li>
        <li class="navli"><a class="nav-link"  href="/login">Login</a></li>
        <li class="navli"><a class="nav-link" href="/">About us</a></li>
        {/* <li class="navli"><a class="nav-link" onClick={logout}>Logout</a></li> */}
        </ul>  
    );
}else if(props.login=="freelancer"){
    return(
    <ul>
    <li class="navli"><a class="nav-link" href="/freelancer">Dashboard</a></li>
    <li class="navli"><a class="nav-link" href="/mybids">My Bids</a></li>
    <li class="navli"><a class="nav-link" onClick={logout}>Logout</a></li>
    </ul> 
    );

}else{
    return(
        <ul>
        <li class="navli"><a class="nav-link" href="/productOwnerDashBoard">Dashboard</a></li>
        <li class="navli"><a class="nav-link"  href="/myprojects">My Projects</a></li>
        <li class="navli"><a class="nav-link" onClick={logout}>Logout</a></li>
        </ul> 
    );
}
}