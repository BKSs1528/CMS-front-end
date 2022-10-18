import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ToastContext from "./ToastContext";


const Authcontext = createContext();

export const AuthcontextProvider =({children})=>{
    const {toast} = useContext(ToastContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [user,setUser] = useState(null)
    const [error,setError]= useState(null)
    useEffect(()=>{
        checkLogin()
    },[])

    //login Check
    const checkLogin = async()=>{
        if(!localStorage.getItem("token")){
            navigate("/login",{replace:true})
        }
        try {
            const response = await fetch("http://localhost:8000/api/me",{
                method:"GET",
                headers:{
                    Authorization:`${localStorage.getItem("token")}`
                }
            })
            const result = response.json()
            if(!result.error){
                console.log(result);
                setUser(result)
                navigate("/",{replace:true})
            }else{
                console.log(result);
                navigate("/login",{replace:true})
            }
        } catch (err) {
            console.log(err);
        }
    }


    //login request
    const loginUser = async (userData)=>{
        try {
            const response = await fetch("http://localhost:8000/api/login",{
                method :"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({...userData})
            })
            const result = await response.json()
            if(!result.error){
                console.log(result);
                localStorage.setItem("token",result.token)
                setUser(result.user)
                navigate("/",{replace:true})
            }else{
                toast.error(result.error)
            }
        } catch (err) {
            console.log(err);
        }
    }

    //register request
    const registerUser = async (userData)=>{
        try {
            const response = await fetch("http://localhost:8000/api/reg",{
                method :"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({...userData})
            })
            const result = await response.json()
            if(!result.error){
                toast.sucess("You are loggedin")
                navigate("/login",{replace:true})
                console.log(result);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
    <Authcontext.Provider value={ {loginUser, registerUser,user, setUser}}>
        <ToastContainer autoClose={2000} />
        {children}
    </Authcontext.Provider>
    )
}

export default Authcontext;