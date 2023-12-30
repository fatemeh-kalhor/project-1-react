import react from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Header/Header";
import Routerpost from '../Pages/Posts/Routerpost';
import Routeruser from '../Pages/Users/Routeruser';
import Routerproducts from '../Pages/Products/Routerproducts';
const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/*" element={<Routerpost />} />
                <Route path="/users/*" element={<Routeruser />} />
                <Route path="/products/*" element={<Routerproducts />} />
            </Routes>
        </BrowserRouter>
      );
}
 
export default App;