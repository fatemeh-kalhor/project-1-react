import Show from "./Show";
import Users from "./Users";
import {  Route, Routes } from "react-router-dom";
const Routeruser = () => {
    return ( 
        <Routes>
            
            <Route path="/" element={<Users />} />
            <Route path="/:id" element={<Show />} />
        </Routes>
     );
}
 
export default Routeruser;