import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Update from "./Update"

const Edit = () => {
    const { id } = useParams()
    const [product,setproduct]=useState(null)
    const fetchproduct = async () => {
        try {
            const res = await axios.get(`http://localhost:3004/Products/${id}`)
            setproduct(res.data)

        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
    fetchproduct()
    },[])
    const navigate=useNavigate()
    return ( 
        <div className="col-6 offset-3 bg-dark text-white mt-2 p-5">
  
        {product && <Update product={product} />} 
    </div>
     );

}
 
export default Edit;