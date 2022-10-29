import "./text.css"
import {useState,useEffect} from 'react'
import { GetPortfoli } from "../client/Clinet"
import {collection, getDocs} from 'firebase/firestore'
function Maintitle(){
    const [textState,setTextState]=useState([])
 
    const GetMainPage=async ()=>{
        const data=await getDocs(collection(GetPortfoli,'MainPage'));
       setTextState(data.docs.map(item=>({...item.data(),id:item.id })))
  console.log(textState)
    };
    useEffect(()=>{
       GetMainPage()
    },[])
    return (
        <div className="textmain">
        {
            textState.map((item,index)=>{
                
                return(
                    <div key={item.id}>
                       <div id="div-one">{item.h1}</div>
                       <div id="div-two">{item.name}</div>
                       <div >{item.about}</div>
                    </div>
                )
            })
        }
        </div>
    )
}
export default Maintitle;