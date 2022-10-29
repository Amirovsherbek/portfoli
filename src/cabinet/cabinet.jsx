import {useEffect, useState} from 'react'
import { storage,GetPortfoli } from '../client/Clinet'
import { ref, uploadBytes,listAll,getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import Cirle from '../silinder/silinder'
import '../threePage/threePage.css'
import '../navbar/navbar.css'
import {NavLink} from 'react-router-dom'
import { Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";
import { doc, collection,getDocs, updateDoc } from 'firebase/firestore'
import { GiCancel } from "react-icons/gi";
import { AiFillEdit,AiOutlineCaretLeft } from "react-icons/ai";
import { RiImageEditFill } from "react-icons/ri";
import { async } from '@firebase/util'
function Cabinet(){
  const [imageUpload,setImageUpload]=useState(null) 
  const [text,setChange]=useState('') 
  const [H2,seth2]=useState('') 
  const [ID,setID]=useState(0) 
  const [id,setId]=useState(0) 
  const [imageState,setImageState]=useState([]) 
  const [state,setState]=useState([])
  const [LogIn,setLogIn]=useState([])
  const [modal,setModalVisable]=useState(false) 
  const [loginModal,setLoginModal]=useState(true) 
  const [login,setLogin]=useState('')
  const [password,setPassword]=useState('')
  const [errorCode,setError]=useState(true) 
  const imageListRef=ref(storage,'images/')
  async function ImageUpload(ImageID){
    if(imageUpload==null) return null;
    const imageRef=ref(storage,`images/${imageUpload.name+v4()}`)
    uploadBytes(imageRef,imageUpload).then(()=>{
    })
    setId(prev=>prev=ImageID)
     getImageList()
  }
  async function Update(){
    setModalVisable(prev=>!prev)
     const userDoc=doc(GetPortfoli,'work',ID)
     const newDate={about:text,name:H2,image:'https://wallpapercave.com/wp/2u7E9o4.jpg'};
     await updateDoc(userDoc,newDate)
     setChange('')
     seth2('')
   
     GetThreePage()
  }
  async function getImageList(){
      listAll(imageListRef).then((res)=>{
        res.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            setImageState((prev)=>[...prev,url])
          })
        })
      }) 
  }
  async function GetThreePage(){
    const data=await getDocs(collection(GetPortfoli,'work'));
    setState(data.docs.map(item=>({...item.data(),id:item.id })))
  };
  function OpenModal(id){
    setModalVisable(prev=>!prev)
    setID(id)
   
  };
 async function EnterCabinet(){
  console.log('ishladi')    
    if(login!=='' && password!==''){
       setError(true)
       console.log('worked')
       const data=await getDocs(collection(GetPortfoli,'password'));
   setLogIn(data.docs.map(item=>({...item.data(),id:item.id })))
   console.log(LogIn.map(item=>{
    if(item.login==login && item.parol==password){
      setLoginModal(true)  
    }
   }))
    }
   else{
    setError(false)
   }
  }
  useEffect(()=>{
     getImageList()
     GetThreePage()
     console.log(imageState[1])
  },[])
  return(
      <div style={{ width:'100%',height:'100%',paddingTop:'20px',boxSizing:'border-box',position:'relative'}}>
     {
      loginModal ?   
      <div className="list"  >
      <NavLink to={'/'} className={'back_text back'}>
          <AiOutlineCaretLeft/>
          <span>Back</span>
      </NavLink>
      {
        state.map((item,index)=>{
         return(
         item.id%2===0 ?  <div key={index} className={'box'} >
          <div className="title_box " >
              <h1>{item.h2}</h1>
              <div>{item.content}</div>
              <button className='btn btn-info d-flex my-5'
                   style={{width: '10%',height:'30px',justifyContent
                   :'center',alignItems:'center',fontSize:'24px'}}
                  onClick={()=>OpenModal(item.id,item.content,item.h2)}
                   >
                 <span><AiFillEdit/></span>
                 
              </button>
           </div>
             <div className="img-box">
             <div>
                   <input type="file" className='form-control input_img_file'
                    style={{ position:'absolute',top:'50%',left:'50%'}} 
                    placeholder={"djasjdaol"}/>
                 </div>
               <img src={item.image} alt="" />
             </div>
           </div>:
          <div key={index} className={'box'}>
            <div className="img-box" >
                 <div>
                   <input type="file" className='form-control input_img_file'
                   onClick={()=>ImageUpload(item.id)}
                   onChange={(e)=>setImageUpload(e.target.files[0])}
                    style={{ position:'absolute',top:'50%',left:'50%'}} 
                    placeholder={"djasjdaol"}/>
                 </div>
                <img src={item.image} alt="" />
             </div>
             <div className="title_box ">
             <div style={{width:'100%',height:'60px'}}>
               <h1>{item.name}</h1>
             </div>
              <div>{item.about}</div>
              <div className=' d-flex my-5'
                   style={{width: '40%',height:'30px',justifyContent
                   :'center',alignItems:'center',fontSize:'24px'}}>
                 <button style={{borderRight:'1px solid #000000',display:'flex',
                 justifyContent:'center',alignItems:'center',width:"50%"}} 
                 onClick={()=>OpenModal(item.id,item.content,item.h2)}><AiFillEdit/></button>
                 <button style={{width:"50%",textAlign:'center',display:'flex',
                 justifyContent:'center',alignItems:'center',}} onClick={()=>ImageUpload(item.id)}
                 ><RiImageEditFill/></button>
              </div>
    </div>
    
  </div>
         ) 
        })
      }
     </div>:
      <div>
         <Cirle/>
         <div className="card login-box" >
          <div className="card-header">
            <h2>Shaxsiy kabinet </h2>
            <div>Login va parolni kiriting </div>
          </div>
          <div className="card-body">
          <form id={'submit'}>
          <input type={'text'} 
              className={'form-control my-2 px-2'} 
              onChange={(e)=>setLogin(e.target.value)}
              placeholder={'login'}/>
            {errorCode ? <div>{" "}</div>:
            <div style={{color:"red",fontSize:'16px'}}>xatolik! <span style={{color:'black'}}>Login yoki parol xato</span></div>}
            <input type={'password'} 
              className={'form-control my-2 px-2'} 
              onChange={(e)=>setPassword(e.target.value)}
              placeholder={'parool'}
              />
          </form>
          </div>
          <div className="card-footer">
             <button onClick={EnterCabinet} className='btn btn-success px-3 py-1 '>Kirish</button>
          </div>
         </div>
      </div>
     }
        {/* before user Edit function ->  row( 186 -210) */}
             <Modal toggle={OpenModal} isOpen={modal}>
               <ModalHeader className="d-flex " style={{flexWrap:'wrap',position:'relative'}}>
               Siz ushbu postni 
                       <div className="cancel">
                          <span onClick={OpenModal}><GiCancel/></span>
                       </div>
               </ModalHeader>
               <ModalBody>
                <form >
                    <input className="form-control my-4" 
                      onChange={(e)=>seth2(e.target.value)} 
                      type="text" placeholder=" title"/>
                   <textarea className='form-control' 
                   onChange={(e)=>setChange(e.target.value)} 
                    cols="30" rows="10" 
                   placeholder='content'></textarea>
                   
                </form>
               </ModalBody>
               <ModalFooter>
                    <button className='btn btn-success px-2' onClick={Update}>Update</button>
                    <button className='btn btn-danger px-2' onClick={OpenModal}>Cancel</button>
               </ModalFooter>
            </Modal>
        {/* after user edit function -> row end */}
        {/* user image Edit function ->  */}
        
        {
          imageState.map((item,index)=>{
            return (
              <div key={index}>
                <img src={item}/>
              </div> 
            )
          })
        }
      </div>
      
    )
}
export default Cabinet;