import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const CustomUsers = () => {
    
        const {isLoading,isError,error,data }=useQuery({
            queryKey: ['Users'],
            queryFn: async () => {
                try {
                    let res = await axios.get ('http://localhost:3004/users')
                    return res.data
                    
                } catch (error){
                    console.log(error.message);
                }
            }
            
        })
        return {isLoading,isError,error,data}
}
 
export default CustomUsers;