import "./circle.jsx"
import Navbar from "../navbar/navbar.jsx";
function CircleTwo(){
    return(
        <div className="circle_two">
             <div className="ring">
                <div className="round">

                </div>
                <span className="line"></span>
                <span className='little_circle little_circle_one'></span>
                <span className='little_circle little_circle_two'></span>
                <div className="navbar_column">
                    <Navbar/>
                </div>
             </div>
        </div>
    )
}
export default CircleTwo;