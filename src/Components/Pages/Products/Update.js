import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
    
const Update = ({product}) => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [image, setimage] = useState("")
    const [rate, setrate] = useState("")
    const [count, setcount] = useState("")

    const navigate = useNavigate()
    const update =async() => {
        try {
            const res = await axios.put(`http://localhost:3004/products/${product.id}`, {
                title: title,
                description:description,
                price: price,
                image: image,
                rating: {
                    rate: rate,
                    count:count
                }
                
            }, { method: "put" })
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            navigate("/products")

        } catch (error) {
            console.log(error.message);
        }
    
    }
    useEffect(() => {
        settitle(product.title)
        setdescription(product.description)
        setimage(product.image)
        setprice(product.price)
        setrate(product.rating.rate)
        setcount(product.rating.count)
    }, [])
    


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

    return (
        < div>
        <div className="d-block mb-2">
        <label htmlFor="title" className="text-capitalize">title</label>
        <input type="text"  id="title" className="form-control" value={title} onChange={(e) => settitle(e.target.value)} />
       
        {/* {title.length ===0?<p className="text-danger">this field required</p>:""}
        {title.length >= 1 && title.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
        {title.length>500?<p className="text-danger">this field dont more than 500 char</p>:""} */}
            </div>

            <div className="d-block mb-2">
                <label htmlFor="image" className="text-capitalize">url image:</label>
                <input type="text"  id="image" className="form-control" value={image} onChange={(e) => setimage(e.target.value)} />
               
                {/* {image.length ===0?<p className="text-danger">this field required</p>:""}
                {image.length >= 1 && image.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
                {image.length>500?<p className="text-danger">this field dont more than 500 char</p>:""} */}
            </div>
            
    <div className="d-block mb-2">
        <label htmlFor="description" className="text-capitalize">description</label>
        <textarea type="text"  id="description" className="form-control" value={description} style={{ height: "150px", resize: "none" }} onChange={(e) => setdescription(e.target.value)} />
        
        {/* {description.length ===0?<p className="text-danger">this field required</p>:""}
        {description.length >= 1 && description.length < 5 ? <p className="text-danger"> more than 5 char</p> : ""}
        {description.length > 500 ? <p className="text-danger">this field dont more than 500 char</p> : ""} */}
        
            </div>
            <div className="form-row">
                    <div className="col-4 mb-2">
                        <label htmlFor="price" className="text-capitalize">price: </label>
                        <input type="text" value={price} id="price" className="form-control"   onChange={(e) => {
                            if (!NumericOnly(e.target.value)) {
                            e.target.value=e.target.value.slice(0,-1)
                            } else {
                                setprice(e.target.value)
                            }
                        }
                        }  />
                    
                        {/* {price.length === 0?<p className="text-danger">this field required</p>:""} */}
                    </div>
                    <div className="col-4 mb-2">
                            <label htmlFor="rate" className="text-capitalize">rate: </label>
                            <input type="text"  id="rate" className="form-control" value={rate}  onChange={(e) => {
                            if (!NumericOnly(e.target.value)) {
                            e.target.value=e.target.value.slice(0,-1)
                            } else {
                                setrate(e.target.value)
                            }
                        }
                        }  />
                        
                            {/* {rate.length ===0?<p className="text-danger">this field required</p>:""} */}
                </div>
                <div className="col-4 mb-2">
                            <label htmlFor="count" className="text-capitalize">count: </label>
                            <input type="text" value={count} id="count" className="form-control"  onChange={(e) => {
                            if (!NumericOnlyCount(e.target.value)) {
                            e.target.value=e.target.value.slice(0,-1)
                            } else {
                                setcount(e.target.value)
                            }
                        }
                        }/>
                        
                            {/* {count.length ===0?<p className="text-danger">this field required</p>:""} */}
                </div>
            </div>

            
    
    <div className="d-block ">
        <button type="submit" disabled={title.length>5 && description.length>5 ?null:"disabled"} className="btn btn-success btn-sm text-capitalize" onClick={update}>update</button>
            </div>
            </div>
      );
}
 
export default Update;