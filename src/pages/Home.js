import {useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../context/Authcontext"
const Home =()=>{
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    console.log(1,user);
    useEffect(()=>{
        !user && navigate("/login", {replace:true})
    },[])
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">Hello, {user ? user.name : null}</h1>
                <a className="btn btn-info" href="#" role="button">Add contacts</a>
            </div>
        </>
    )
}

export default Home;