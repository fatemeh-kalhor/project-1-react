
import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    return (
        <>

                <div className="col-5 gap-5 p-5 mx-auto mt-5" style={{  border:"2px solid black",borderRadius:"5px"}}>
                    <h4>Title:    <Link to={`/products/${product.id}`}>{product.title}</Link></h4>
                    <img src={product.image} alt="" className="img-fluid d-block mx-auto" style={{ width: "50%", height: "200px", objectFit: "cover" }} />
                    <p className="text-truncate mt-2">{product.description}</p>
                    <div className="d-flex justify-content-between">
                        <h5>Price:${ product.price}</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>rate:{product.rating.rate}</h5>
                        <h5>count:{product.rating.count}</h5>
                    </div>
                </div>

        

            






   

</>
    );
}
 
export default Product;