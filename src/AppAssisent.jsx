import Cirle from "./silinder/silinder";
import './App.css'
import Maintitle from "./text/maintext";
import Navbar from "./navbar/navbar";
function AppAssisent(){
    return(
        <div>
                <div className="circle-main">
            <Cirle/>
          </div>
          <div className="title"><Maintitle/></div>
          <span className="little-circle1"></span>
          <span className="little-circle2"></span>
          <span className="little-circle3"></span>
          <span className="little-circle4"></span>
        <div className="navbar-column">
           <Navbar/>
        </div>
        </div>
    )
}
export default AppAssisent;