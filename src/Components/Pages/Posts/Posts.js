import { useEffect, useState } from "react";
import Post from "./Post";
import { Axios } from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CustomPosts from "../../CustomHook/CustomPosts";
const Posts = () => {
    const { isLoading, isError, error, data } = CustomPosts()
    if (isLoading) {
        return <div className="text-center"><span className="spinner-border spinner-border-sm"></span></div>
        }
        if (isError) {
            return <h1>{error.message}</h1>
        }
    return (
        <div>
        <Link to='/posts/create' className="btn btn-success btn-sm m-5">Create </Link>
                <div className="d-flex justify-content-center p-3 flex-wrap">
        {
                    data?.map((elem) => {
                        return <Post post={elem} key={elem.id}/>
                    })
        }
        </div>
        </div>
    )
            
//     const [posts, setposts] = useState(null)
    
//     const fetchPost = async () => {
//         try {
//             let data = await fetch ("http://localhost:3004/posts")
//             const res = await data.json()
//             setposts(res)
//         } catch (error){
//             console.log(error.message);
//         }
//     }
//     useEffect(() => {
//         fetchPost()
//     },[])
//     return ( 
//         <div>
//             <Link to='/posts/create' className="btn btn-success btn-sm m-5">Create </Link>
//                     <div className="d-flex justify-content-center p-3 flex-wrap">
//             {
//                         posts && posts.map((elem) => {
//                             return <Post post={elem} key={elem.id}/>
//                         })
//       }
//       </div>
// </div>
//      );
}
 
export default Posts;