import { useState } from "react";
import axios  from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
const Create = () => {
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")

    const titleref=useRef("")
    const bodyref = useRef("")
    const navigate=useNavigate()
    const fetchcreatepost = async () => {
        try {
            let res = await axios.post('http://localhost:3004/posts', {
                title: title,
                body: body
            })
            console.log(res.data);
                

        } catch (error) {
            console.log(error.message);
        }
    }
    const createpost = () => {
        fetchcreatepost()
        titleref.current.value = ""    
        bodyref.current.value=""
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        navigate("/posts")
    }

    return (
        <div className="col-6 offset-3 bg-dark text-white mt-2 p-5">
            <div className="d-block mb-2">
                <label htmlFor="title" className="text-capitalize">title</label>
                <input type="text" ref={titleref} id="title" className="form-control" placeholder="title" onChange={(e) => settitle(e.target.value)} />
               
                {title.length ===0?<p className="text-danger">this field required</p>:""}
                {title.length >= 1 && title.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
                {title.length>500?<p className="text-danger">this field dont more than 500 char</p>:""}
            </div>
            <div className="d-block mb-2">
                <label htmlFor="body" className="text-capitalize">body</label>
                <textarea type="text" ref={bodyref} id="body" className="form-control" placeholder="body" style={{ height: "150px", resize: "none" }} onChange={(e) => setbody(e.target.value)} />
                
                {body.length ===0?<p className="text-danger">this field required</p>:""}
                {body.length >= 1 && body.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
                {body.length > 500 ? <p className="text-danger">this field dont more than 500 char</p> : ""}
                
            </div>
            
            <div className="d-block ">
                <button type="submit" disabled={title.length>5 && body.length>5 ?null:"disabled"} className="btn btn-success btn-sm text-capitalize" onClick={createpost}>create</button>
            </div>

        </div>
    );
}
 
export default Create;