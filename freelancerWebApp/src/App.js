import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import SaveForm from './pages/user/SaveForm';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import UpdateForm from './pages/user/UpdateForm';
import Detail from './pages/book/Detail';
import Footer from './components/Footer';
import Register from './components/register';
import ProjectCardView from './components/freelancer/ProjectCardView';
import FreelancerDashboard from './components/freelancer/FreelancerDashboard';
import BidView from './components/freelancer/BidView';
import MyBids from './components/freelancer/mybids';
import BidCard from './components/freelancer/BidCard';
import ProductOwnerDashboard from './components/productOwner/ProductOwnerDashboard';
import ProjectOwnerBidCard from './components/productOwner/ProjectOwnerBidCard';
import MyProjects from './components/productOwner/MyProjects';
import AddProjectForm from './components/productOwner/AddProjectForm';

function App() {
  const isLoginasFreelancer=false;
  const isloginasProjectOwner=false;
  return (
    <div>
  {/* <Container> */}

  {/* <Header/> */}
  <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/freelancer" exact={true} element={<FreelancerDashboard/>}/>
        <Route path="/save" exact={true} element={<SaveForm/>}/>
        <Route path="/book/:id" exact={true} component={Detail}/>
        <Route path="/login" exact={true} element={<LoginForm/>}/>
        <Route path="/register" exact={true} element={<Register/>}/>
        <Route path="/projectDetailComponent" exact={true} element={<ProjectCardView/>}/>
        <Route path="/cardView" exact={true} element={<BidView/>}/>
        <Route path="/mybids" exact={true} element={<MyBids/>}/>
        <Route path="/productOwnerDashBoard" exact={true} element={<ProductOwnerDashboard/>}/>
        <Route path="/myprojects" exact={true} element={<MyProjects/>}/>
        <Route path="/addProjects" exact={true} element={<AddProjectForm/>}/>    
  </Routes>
      <Footer/>
      {/* </Container>   */}
    </div>
  );
}

export default App;
