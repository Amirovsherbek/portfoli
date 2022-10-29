import CircleTwo from "../silinder/circle";
import './threePage.css'
import {useState,useEffect} from 'react'
import { GetPortfoli } from "../client/Clinet"
import {collection, getDocs, updateDoc} from 'firebase/firestore'
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCaretLeft } from "react-icons/ai";
function Threepage(props){
   const [state,setState]=useState([])
   async  function GetThreePage(){
    const data=await getDocs(collection(GetPortfoli,'work'));
   setState(data.docs.map(item=>({...item.data(),id:item.id })))

};
useEffect(()=>{
    
   GetThreePage()
  
},[])
   

    return(
        <div className="page_three">
             <div id="Two_page_Circle"><CircleTwo/> </div>
             <div className="navbar_mobile"><Navbar/></div>
             <div className="list">
              {
                state.map((item,index)=>{
                 return(
                 item.id%2===0 ?  <div key={index} className={'box'}>
                  <div className="title_box " >
                      <h1>{item.h2}</h1>
                      <div>{item.content}</div>
                      <div className="more">
                    <NavLink to={"/about/"+item.id} className={'more_link '} >
                      Batafsil 
                       <span className="text-light"><BsArrowRight/></span>
                     </NavLink>
                </div>                  
                   </div>
                     <div className="img-box">
                       <img src={item.image} alt="" />
                     </div>
                     
                   </div>:<div key={index} className={'box'} >
                 <div className="img-box">
                      <img src={item.image} alt="" />
                  </div>
                  <div className="title_box ">
                      <h1>{item.name}</h1>
                      <div>{item.about}</div>
                <div className="more">
                    <NavLink to={"/about/"+item.id} className={'more_link'} >
                      Batafsil 
                       <span className="text-light"><BsArrowRight/></span>
                     </NavLink>
                </div>
            </div>
          </div>
                 ) 
                })
              
              }
             </div>
        </div>
    )
}
export default Threepage;