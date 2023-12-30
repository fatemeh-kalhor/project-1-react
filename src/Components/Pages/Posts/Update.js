
import { useState } from "react";
import axios  from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const Update = ({post}) => {
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    const navigate = useNavigate()
    const update =async() => {
        try {
            const res = await axios.put(`http://localhost:3004/posts/${post.id}`, {
                title: title,
                body:body
            }, { method: "put" })
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            navigate("/posts")

        } catch (error) {
            console.log(error.message);
        }
    
    }
    useEffect(() => {
        settitle(post.title)
        setbody(post.body)
    },[])
    return ( 
       < div>
        <div className="d-block mb-2">
        <label htmlFor="title" className="text-capitalize">title</label>
        <input type="text"  id="title" className="form-control" value={title} onChange={(e) => settitle(e.target.value)} />
       
        {title.length ===0?<p className="text-danger">this field required</p>:""}
        {title.length >= 1 && title.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
        {title.length>500?<p className="text-danger">this field dont more than 500 char</p>:""}
    </div>
    <div className="d-block mb-2">
        <label htmlFor="body" className="text-capitalize">body</label>
        <textarea type="text"  id="body" className="form-control" value={body} style={{ height: "150px", resize: "none" }} onChange={(e) => setbody(e.target.value)} />
        
        {body.length ===0?<p className="text-danger">this field required</p>:""}
        {body.length >= 1 && body.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
        {body.length > 500 ? <p className="text-danger">this field dont more than 500 char</p> : ""}
        
            </div>
    
    <div className="d-block ">
        <button type="submit" disabled={title.length>5 && body.length>5 ?null:"disabled"} className="btn btn-success btn-sm text-capitalize" onClick={update}>update</button>
            </div>
            </div>
     );
}
 
export default Update;