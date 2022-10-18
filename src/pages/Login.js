import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Authcontext from "../context/Authcontext";
import ToastContext from "../context/ToastContext";

const Login =()=>{
    const {toast} = useContext(ToastContext)
    const {loginUser}= useContext(Authcontext)
    const [credentials,setCredentials]= useState({
        email:"",password:""
    })
    const handleInput=(e)=>{
        setCredentials(form =>({...form,[e.target.name]:e.target.value}))
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        // toast.sucess("logged in")
        loginUser(credentials);
        if(!credentials.email || !credentials.password){
            return toast.error("Please fill all input fields")
        }
    }
    return (
        <>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="emailInput" className="form-label mt-4">Email address</label>
                <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleInput} id="emailInput" aria-describedby="emailHelp" placeholder="example@gmail.com" required />
            </div>
            <div className="form-group">
                <label htmlFor="passwordInput" className="form-label mt-4">Password</label>
                <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleInput} id="passwordInput" aria-describedby="emailHelp" placeholder="password" required />
            </div>
            <input type="submit" value="Login" className="btn btn-primary my-3"/>
            <p>Don't have an account? <Link to="/register">Create One</Link></p>
            </form>
        </>
    )
}

export default Login;