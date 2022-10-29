import { supbase } from "./client/client";
import {useState,useEffect,useContext,createContext} from 'react'
const authContext=createContext();
export const AuthProvider=({children})=>{
     const auth=useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
export const useAuth=()=>{
    return useContext(authContext)
}
function useProvideAuth(){
    const [user,setuser]=useState(null)
    const login=async (email)=>{
        const {error,user}=await supbase.auth.signIn({email})
        if(error){
            console.log(error)
        }
        return {error,user}
    }    
    const logout=async ()=>{
        const {error}=await supbase.auth.signOut()
        if(error){
            console.log(error)
        }
        setuser(null)
    }
    useEffect(()=>{
        const user=supbase.auth.user()
        setuser(user)
        const auth=supbase.auth.onAuthStateChange((e,session)=>{
            if(e==="SIGNED_IN"){
                setuser(session.user)
            }
            if(e==="SIGNED_OUT"){
                setuser(null)
            }
        })    
        return ()=>auth.unsubscribe()
    },[])
    return {
        user,
        login,
        logout
    }

}