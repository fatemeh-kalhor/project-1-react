import { useEffect, useState } from "react";
import User from "./User";
import CustomUsers from "../../CustomHook/CustomUsers";

const Users = () => {
    const {isLoading,isError,error,data }=CustomUsers()

    // const [Users, setUsers] = useState(null)
    // const [Loading, setLoading] = useState(true)
    // const [error, setError] = useState("")
    // const fetchUsers = async()=> {
    //     try {
    //         const data = await fetch("https://jsonplaceholder.typicode.com/users")
    //         const res = await data.json()
    //         setUsers(res)
    //         setLoading(false)
    //         setError("")
    //     } catch (error) {
    //         console.log(error.message);
    //         setError(error.message)
    //         setLoading(true)
    //     }
    // }
    // useEffect(() => {
    //     fetchUsers()
    // },[])
    if (isLoading) {
    return <div className="text-center"><span className="spinner-border spinner-border-sm"></span></div>
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }
    return (
        <div className="col-12 px-3 py-2 ">
            <div className="d-flex justify-content-center flex-wrap">
                {data?.map((elem) => {
                    return <User user={elem} key={elem.id} />
                })}
            </div>
        </div>

        // <div className="col-12 px-3 py-2 ">
        //     {Loading && (<div className="text-center"><span className="spinner-border spinner-border-sm"></span></div>)}
        //     <div className="d-flex justify-content-center flex-wrap">
        //     {Users && Users.map((elem) => {
        //         return <User user={elem} key={elem.id} />
        //     })}
        //   </div>
        // </div>
      );
}
 
export default Users;