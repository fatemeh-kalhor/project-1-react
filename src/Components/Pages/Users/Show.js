import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Show = () => {
    const {id}=useParams()
    const [user, setUser] = useState(null)
    const navigate=useNavigate()
    const fetchUser = async () => {
        const data=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const res =await data.json()
        // const userItem=res.find((elem)=> elem.username === id)
        setUser(res)
    }
    const comebackusers = () => {
        navigate("/users")
    }
    useEffect(() => {
        fetchUser()
    })
    return ( 
        user && (
        <div className="card mx-2 my-2" style={{ width:"18rem"}}>
        <div className="card-header bg-dark text-white">
            {user.name}
        </div>
        <ul className="list-group list-group-flush bg-dark text-white">
            <li className="list-group-item bg-dark text-white">{user.username}</li>
            <li className="list-group-item bg-dark text-white">{user.email}</li>
            <li className="list-group-item bg-dark text-white">{user.phone}</li>
            <li className="list-group-item bg-dark text-white">{user.website}</li>
            <li className="list-group-item bg-dark text-white"><button  className="btn btn-success btn-sm mx-2 text-capitalize" onClick={comebackusers}>come back</button></li>
            
        </ul>
    </div>)
     );
}
 
export default Show;