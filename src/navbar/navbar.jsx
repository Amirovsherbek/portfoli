import "./navbar.css"
import {NavLink} from 'react-router-dom'
import { Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";
function Navbar(){
  return(
        <div className="navbar-row">
            <div className="navbar-box">
            <NavLink to={'/'} className={({ isActive }) =>
              isActive ? "active" : "noactive"
            }>Home</NavLink>
            
            <NavLink to={'/docs'} className={({ isActive }) =>
              isActive ? "active" : "noactive"
            }>work</NavLink>  
            
            <NavLink to={'/cab'} className={({ isActive }) =>
              isActive ? "active" : "noactive"
            }>Log in</NavLink>  
            </div> 
        </div>
    )
}
export default Navbar;