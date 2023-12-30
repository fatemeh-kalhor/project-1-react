import { useEffect, useState } from "react"
import Product from "./Product"
import { Link } from "react-router-dom"
import CustomProducts from "../../CustomHook/CustomProducts"

const Products = () => {
    const { isLoading, isError, error, data } = CustomProducts()
    if (isLoading) {
        return <div className="text-center"><span className="spinner-border spinner-border-sm"></span></div>
        }
        if (isError) {
            return <h1>{error.message}</h1>
        }
    return (
        <div>
        <Link to='/Products/Create' className="btn btn-success btn-sm m-5">Create </Link>
                <div className="d-flex justify-content-center p-3 flex-wrap">
        {
                    data?.map((elem) => {
                        return <Product product={elem} key={elem.id}/>
                    })
            }     
                </div>
                </div>
    )

//     const[products, setproducts] = useState(null)
//     const fetchproducts = async () => {
//         try {
//             let data = await fetch ("http://localhost:3004/products")
//             const res = await data.json()
//             setproducts(res)
//         } catch (error){
//             console.log(error.message);
//         }
//     }
//     useEffect(() => {
//         fetchproducts()
//     },[])
//     return ( 
//         <div>
//         <Link to='/Products/Create' className="btn btn-success btn-sm m-5">Create </Link>
//                 <div className="d-flex justify-content-center p-3 flex-wrap">
//         {
//                     products && products.map((elem) => {
//                         return <Product product={elem} key={elem.id}/>
//                     })
//   }
//   </div>
// </div>
//      );
}
 
export default Products;