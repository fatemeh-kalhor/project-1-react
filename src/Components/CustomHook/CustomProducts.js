import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CustomProducts = () => {
    const {isLoading,isError,error,data }=useQuery({
        queryKey: ['Products'],
        queryFn: async () => {
            try {
                let res = await axios.get ('http://localhost:3004/products')
                return res.data
                
            } catch (error){
                console.log(error.message);
            }
        }
        
    })
    return {isLoading,isError,error,data}
}
 
export default CustomProducts;