import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios  from "axios";
import Swal from "sweetalert2";
const Show = () => {
    const {id}=useParams()
    const [product, setproduct] = useState(null)
    const navigate=useNavigate()
    const fetchproduct = async () => {
        try {
            const data = await fetch(`http://localhost:3004/products/${id}`)
            const res=await data.json()
            setproduct(res)
        } catch (error) {
            console.log(error.message);
        }
    }
    const comebackproducts = () => {
        navigate("/products")
    }
    const editproduct = () => {
        navigate(`/products/edit/${id}`) 
    }
    const deleteproduct = async () => {



        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success mx-1",
              cancelButton: "btn btn-danger mx-1"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                
              
                const res =  axios.delete(`http://localhost:3004/products/${id}`, { method: "delete" })
                console.log(res.data);
                navigate("/products")
                
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });

    }
    useEffect(() => {
        fetchproduct()
    },[])
    return (  
        product && (
            <div className="card mx-2 my-2" style={{ width: "18rem" }}>
        <div className="card-header bg-dark text-white">
           {product.title}
        </div>
        <ul className="list-group list-group-flush bg-dark text-white">
            <li className="list-group-item bg-dark text-white">{ product.description}</li>
            
                    <li className="list-group-item bg-dark text-white">
                        <button className="btn btn-success btn-sm mx-2 text-capitalize" onClick={comebackproducts}>come back</button>
                        <button className="btn btn-danger btn-sm mx-2 text-capitalize" onClick={deleteproduct}>delete</button>
                        <button  className="btn btn-warning btn-sm mx-2 text-capitalize" onClick={editproduct}>edit</button>
                    </li>
                    
        </ul>
    </div>
        )
    );
}
 
export default Show;