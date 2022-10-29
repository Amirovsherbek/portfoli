import CircleTwo from "../silinder/circle";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import './twopage.css'
import { GetPortfoli } from "../client/Clinet";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
function NextPage(){
    const [Data,setData]=useState([])
    async function GetTwoPage(){
        const data=await getDocs(collection(GetPortfoli,'work'))
         setData(data.docs.map(item=>({...item.data(),id:item.id })))
         await console.log(data)
        }
    useEffect(()=>{
      GetTwoPage()
    },[])
    const params=useParams()

    return(
        <div className="page_two">
             <div id="Two_page_Circle"><CircleTwo/> </div>
             <div >
               <NavLink to={'/docs'} className={'back_text back'}>
                 <AiOutlineCaretLeft/>
                 <span>Back</span>
               </NavLink>
             </div>
            {
                Data.filter(item=>{
                    if(item.id===params.id){
                     
                        return item;
                    }
                }).map(item=>{
                    return (
                        <div key={item.id} className="about">
                       
                        <div className="about_img">
                        <img src={item.image} alt="" />
                        </div>
                        <div className="about_title">
                            <h2>{item.name}</h2>
                        </div>
                       {null ?  <hr style={{color:"#ffffff"}}/>:""}
                        <div className="about_text">
                            <div>{item.about}</div>
                        </div>
                     </div>
                    )
                })
            }
        </div>
    )
}
export default NextPage;