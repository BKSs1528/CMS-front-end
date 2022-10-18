import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import Authcontext from "../context/Authcontext";

const Navbar =()=>{
    const navigate = useNavigate()
    const {user,setUser} = useContext(Authcontext)
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <Link to="/"><a className="navbar-brand" href="#">CMS</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ms-auto">
            {
                user ? 
               ( <>
                    <li className="nav-item">
                        <Link to="/contact"><a className="nav-link" >create</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mycontacts"><a className="nav-link" >my contacts</a></Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-danger" onClick={()=>{
                            setUser(null) 
                            localStorage.clear()
                            navigate("/login",{replace:true})
                            }}>Log out</button>
                    </li>
                </> )
                : 
                (<>
                    <li className="nav-item">
                        <Link to="/register"><a className="nav-link">Register</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login"><a className="nav-link" >Login</a></Link>
                    </li>
                </>)
            }
        </ul>
        </div>
    </div>
</nav>)
}

export default Navbar;