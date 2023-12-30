import { Link } from "react-router-dom";

const User = ({user}) => {

    return ( 
        <div className="card mx-2 my-2" style={{width:"18rem"}}>
            <div className="card-header bg-dark text-white">
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </div>
            <ul className="list-group list-group-flush bg-dark text-white">
                <li className="list-group-item bg-dark text-white">{ user.username}</li>
                <li className="list-group-item bg-dark text-white">{ user.email}</li>
                <li className="list-group-item bg-dark text-white">{user.phone}</li>
                <li className="list-group-item bg-dark text-white">{user.website}</li>
                
            </ul>
        </div>
     );
}
 
export default User;