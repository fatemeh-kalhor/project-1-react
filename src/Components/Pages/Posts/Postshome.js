import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Post from "./Post"
import CustomPosts from "../../CustomHook/CustomPosts"

const Posthome = () => {
    const { isLoading, isError, error, data } = CustomPosts()
    if (isLoading) {
        return <div className="text-center"><span className="spinner-border spinner-border-sm"></span></div>
        }
        if (isError) {
            return <h1>{error.message}</h1>
    }
    return ( 
        <div className="d-block mt-5 text-dark col-12 p-5">
            {/* <h1> Posts:</h1> */}
            <div className="d-flex justify-content-center flex-wrap ">
               
            {
                        data?.map((elem) => {
                            return (
                                <div className="card m-3" key={elem.id} style={{ width: "18rem" }}>
                            <div className="card-header bg-dark text-white">
                                {elem.title.substr(0,10)}
                            </div>
                            <ul className="list-group list-group-flush bg-dark text-white">
                                <li className="list-group-item bg-dark text-white">{ elem.body.substr(0,20)}</li>
                                
                            </ul>
                        </div>
                                
                            ) 
                            
                            
                        })
      }
      </div>
</div>
     );
    

//     const[posts, setposts] = useState(null)
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
//         <div className="d-block mt-5 text-dark col-12 p-5">
//             <h1> Posts:</h1>
//             <div className="d-flex justify-content-center flex-wrap ">
               
//             {
//                         posts && posts.map((elem) => {
//                             return (
//                                 <div className="card m-3" key={elem.id} style={{ width: "18rem" }}>
//                             <div className="card-header bg-dark text-white">
//                                 {elem.title.substr(0,10)}
//                             </div>
//                             <ul className="list-group list-group-flush bg-dark text-white">
//                                 <li className="list-group-item bg-dark text-white">{ elem.body.substr(0,20)}</li>
                                
//                             </ul>
//                         </div>
                                
//                             ) 
                            
                            
//                         })
//       }
//       </div>
// </div>
//      );
}
 
export default Posthome;