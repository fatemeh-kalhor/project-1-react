import { useState } from "react";
import axios  from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { Form, FormControl } from 'react-bootstrap/Form';
const Create = () => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [image, setimage] = useState("")
    const [rate, setrate] = useState("")
    const [count, setcount] = useState("")

    
    const titleref=useRef("")
    const descriptionref = useRef("")
    const priceref = useRef("")
    const imageref = useRef("")
    const rateref = useRef("")
    const countref = useRef("")
    
    const navigate = useNavigate()
    
    const fetchcreateproduct = async () => {
        try {
            let res = await axios.post('http://localhost:3004/products', {
                title: title,
                description: description,
                price: price,
                image: image,
                rating: {
                    rate: rate,
                    count:count
                }
            })
            console.log(res.data);
                

        } catch (error) {
            console.log(error.message);
        }
    }
    const createproduct = () => {
        fetchcreateproduct()
        titleref.current.value = ""    
        descriptionref.current.value = ""
        priceref.current.value = ""
        imageref.current.value = ""
        rateref.current.value = ""
        countref.current.value=""
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        navigate("/products")
    }


     function NumericOnly(input) {
        const reg = /^[0-9]*\.?[0-9]*$/
        if ( reg.test(input)) {
          return  true
        } else { return false} 
    }
    
    
const NumericOnlyCount= (input) => { 
        const reg = /^[0-9\b]+$/
        if (reg.test(input)) {
            return true
        } else { return false} 
    }
//     const NumericOnlyCount= (e) => { 
//         const reg = /^[0-9\b]+$/
//         let preval=e.target.value
//         if (e.target.value === '' || reg.test(e.target.value)) {
//             setcount(e.target.value)
//         } else { e.target.value = preval.substring(0,(preval.length-1))} 
// }

    return (
        
        <div className="col-6 offset-3 bg-dark text-white mt-2 p-5">

            <div className="d-block mb-2">
                <label htmlFor="title" className="text-capitalize">title</label>
                <input type="text" ref={titleref} id="title" className="form-control" placeholder="title...!" onChange={(e) => settitle(e.target.value)} />
               
                {title.length ===0?<p className="text-danger">this field required</p>:""}
                {title.length >= 1 && title.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
                {title.length>500?<p className="text-danger">this field dont more than 500 char</p>:""}
            </div>
            <div className="d-block mb-2">
                <label htmlFor="image" className="text-capitalize">url image:</label>
                <input type="text" ref={imageref} id="image" className="form-control" placeholder="URL Image...!" onChange={(e) => setimage(e.target.value)} />
               
                {image.length ===0?<p className="text-danger">this field required</p>:""}
                {image.length >= 1 && image.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
                {image.length>500?<p className="text-danger">this field dont more than 500 char</p>:""}
            </div>
            {/* <div class="form-group">
                <label for="exampleFormControlFile1">select</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div> */}
            <div className="d-block mb-2">
                <label htmlFor="description" className="text-capitalize">description</label>
                <textarea type="text" ref={descriptionref} id="description" className="form-control" placeholder="description...!" style={{ height: "150px", resize: "none" }} onChange={(e) => setdescription(e.target.value)} />
                
                {description.length ===0?<p className="text-danger">this field required</p>:""}
                {description.length >= 1 && description.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
                {description.length > 500 ? <p className="text-danger">this field dont more than 500 char</p> : ""}
                
            </div>
            <div className="form-row">
                    <div className="col-4 mb-2">
                    <label htmlFor="price" className="text-capitalize">price: </label>
                    {/* onChange={(e) => setprice(e.target.value)} */}
                        <input type="text" ref={priceref} id="price" className="form-control" placeholder="price..." 
                        onChange={(e) => {
                            if (!NumericOnly(e.target.value)) {
                            e.target.value=e.target.value.slice(0,-1)
                            } else {
                                setprice(e.target.value)
                            }
                        }
                        } />
                    

                    
                        {price.length === 0?<p className="text-danger">this field required</p>:""}
                    </div>
                    <div className="col-4 mb-2">
                            <label htmlFor="rate" className="text-capitalize">rate: </label>
                            <input type="text" ref={rateref} id="rate" className="form-control" placeholder="rate..."  onChange={(e) => {
                            if (!NumericOnly(e.target.value)) {
                            e.target.value=e.target.value.slice(0,-1)
                            } else {
                                setrate(e.target.value)
                            }
                        }
                        }/>
                        
                            {rate.length ===0?<p className="text-danger">this field required</p>:""}
                </div>
                
                <div className="col-4 mb-2">
                            <label htmlFor="count" className="text-capitalize">count: </label>
                            <input type="text" ref={countref} id="count" className="form-control" placeholder="count..." onChange={(e) => {
                            if (!NumericOnlyCount(e.target.value)) {
                            e.target.value=e.target.value.slice(0,-1)
                            } else {
                                setcount(e.target.value)
                            }
                        }
                        } />
                        
                            {count.length ===0?<p className="text-danger">this field required</p>:""}
                </div>
            </div>

            
            <div className="d-block ">
                <button type="submit" disabled={title.length>5 && description.length>5  ?null:"disabled"} className="btn btn-success btn-sm text-capitalize" onClick={createproduct}>create product</button>
            </div>

        </div>
    );
}
 
export default Create;