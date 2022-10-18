import { useState,useContext } from "react";
import {Link} from "react-router-dom"


import Authcontext from "../context/Authcontext";
import ToastContext from "../context/ToastContext";

const Register =()=>{
    const { toast } = useContext(ToastContext)
    const {registerUser}= useContext(Authcontext)
    const [credentials,setCredentials]= useState({
        name:"",email:"",phoneNumber:"",password:"",confirmpassword:""
    })
    const handleInput=(e)=>{
        setCredentials(form =>({...form,[e.target.name]:e.target.value}))
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        
        if(!credentials.email || !credentials.password || !credentials.confirmpassword){
            toast.error("Please fill all input fields")
            return
        }
        if(credentials.password !==credentials.confirmpassword){
            toast.error("passwprd donot match")
            return
        }
        const contact = {...credentials, confirmpassword:undefined}
        registerUser(contact)
    }
    return (
        <>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="emailInput" className="form-label mt-4">Name</label>
                    <input type="text" className="form-control" name="name" id="nameinput"  onChange={handleInput} value={credentials.name} placeholder="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput" className="form-label mt-4">Email address</label>
                    <input type="email" className="form-control" name="email" id="emailInput"  onChange={handleInput} value={credentials.email} placeholder="example@gmail.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneInput" className="form-label mt-4">Phone number</label>
                    <input type="number" className="form-control" name="phoneNumber" id="phoneNumberInput"  onChange={handleInput} value={credentials.phoneNumber} placeholder="00000000" required />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control" name="password" id="passwordInput" value={credentials.password} onChange={handleInput} aria-describedby="emailHelp" placeholder="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpasswordInput" className="form-label mt-4">confirm password</label>
                    <input type="password" className="form-control" name="confirmpassword" id="confirmpasswordInput" value={credentials.confirmpassword} onChange={handleInput} aria-describedby="emailHelp" placeholder="confirm password" required />
                </div>
                <input type="submit" value="Register" className="btn btn-primary my-3"/>
                <p>already have an account?<Link to="/login">Sign in</Link></p>
            </form>
        </>
    )
}

export default Register;