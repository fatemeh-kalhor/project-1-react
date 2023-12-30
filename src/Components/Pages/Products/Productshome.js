import { useEffect, useState } from "react";
import CustomProducts from "../../CustomHook/CustomProducts";

const Productshome = () => {
    const { isLoading, isError, error, data } = CustomProducts()
    if (isLoading) {
        return <div className="text-center"><span className="spinner-border spinner-border-sm"></span></div>
        }
        if (isError) {
            return <h1>{error.message}</h1>
    }
    
    // const[products, setproducts] = useState(null)
    // const fetchproduct = async () => {
    //     try {
    //         let data = await fetch ("http://localhost:3004/products")
    //         const res = await data.json()
    //         setproducts(res)
    //     } catch (error){
    //         console.log(error.message);
    //     }
    // }
    // useEffect(() => {
    //     fetchproduct()
    // },[])
    return ( 
        <div className="d-block mt-5 text-dark col-12 p-5">
        {/* <h1> Products:</h1> */}
        <div className="d-flex justify-content-center flex-wrap ">
           
        {
                    data?.map((elem) => {
                        return (
                                <div className="col-5 gap-5 p-5 mx-auto mt-5" key={elem.id} style={{  border:"2px solid dark",borderRadius:"5px"}}>
                                <h4>Title:   {elem.title}
                                </h4>
                            <img src={elem.image} alt="" className="img-fluid d-block mx-auto" style={{ width: "50%", height: "200px", objectFit: "cover" }} />
                            <p className="text-truncate text-capitalize mt-2"> description: {elem.description}</p>
                            <div className="d-flex justify-content-between">
                                <h5>Price:${ elem.price}</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>rate:{elem.rating.rate}</h5>
                                <h5>count:{elem.rating.count}</h5>
                            </div>
                        </div>  
                        )

                    })
  }
  </div>
</div>
     );
}
 
export default Productshome;