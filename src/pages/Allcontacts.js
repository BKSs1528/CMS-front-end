import {useEffect, useState} from "react"

const Allcontacts = async ()=>{
    const [contactData,setContactdata]= useState({
        name:"",phoneNumber:"",email:""
    })
    useEffect(async ()=>{
        try {
            const response = await fetch("http://localhost:8000/api/mycontacts",{
                method:"GET",
                headers:{
                    "Authorization":`${localStorage.getItem("token")}`
                }
            })
            const result = await response.json()
            if(!result.error){
                setContactdata(result)
                console.log(result);
            }else{
                console.log(result.error);
            }
        } catch (err) {
            console.log(err);
        }
    },[])
    
    return (
        <>
            <div className="jumbotron">
                <hr className="my-4"/>
                <table className="table table-hover">
                    <thead>
                        <tr className="table table-dark">
                            <th scope="col">Serial number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-active">
                            <th scope="row">Active</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Allcontacts;