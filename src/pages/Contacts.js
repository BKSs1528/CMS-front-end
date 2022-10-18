import {useContext, useState} from "react"

import AuthContext from "../context/Authcontext"
import ToastContext from "../context/ToastContext"
const Contacts =()=>{
    const { toast } =useContext(ToastContext)
    const {user} = useContext(AuthContext)
    const [userDetails,setUserdetails] = useState({
        name:"",phoneNumber:"",email:""
    })
    const handleInput=(e)=>{
        setUserdetails(form =>({...form,[e.target.name]:e.target.value}))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/contact",{
            method :"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${localStorage.getItem("token")}`
            },
            body:JSON.stringify({...userDetails})
        })
        const result = await response.json()
        if(!result.error){
            console.log(result)
            toast.sucess(`contact ${result} sucessfully`)
            setUserdetails({name:"",phoneNumber:"",email:""})
        }
        else{console.log(result.error);}
    }
    return (
        <>
            <h3>create contact</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label mt-4">Name of person</label>
                    <input type="text" className="form-control" name="name"
                    value={userDetails.name} 
                    onChange={handleInput}
                    id="nameInput" aria-describedby="emailHelp" placeholder="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNUmber" className="form-label mt-4">phone number</label>
                    <input type="number" className="form-control" name="phoneNumber"
                    value={userDetails.phoneNumber} 
                    onChange={handleInput}
                    id="phoneNumberInput" aria-describedby="emailHelp" placeholder="Phone number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInpu" className="form-label mt-4">email</label>
                    <input type="text" className="form-control" name="email"
                    value={userDetails.email} 
                    onChange={handleInput}
                    id="emailInput" aria-describedby="emailHelp" placeholder="email" required />
                </div>
                <input type="submit" className="btn btn-info" value="create contact"/>
            </form>
        </>
    )
}

export default Contacts;