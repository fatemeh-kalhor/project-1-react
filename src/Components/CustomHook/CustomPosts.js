import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CustomPosts = () => {
    const {isLoading,isError,error,data }=useQuery({
        queryKey: ['Posts'],
        queryFn: async () => {
            try {
                let res = await axios.get ('http://localhost:3004/posts')
                return res.data
                
            } catch (error){
                console.log(error.message);
            }
        }
        
    })
    return {isLoading,isError,error,data}
}
 
export default CustomPosts;