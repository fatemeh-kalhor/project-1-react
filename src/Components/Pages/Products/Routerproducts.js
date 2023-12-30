import Create from "./Create";
import Edit from "./Edit";
import Products from "./Products";
import Show from "./Show";
import { Route, Routes } from "react-router-dom";
const Routerproducts = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:id" element={<Show />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default Routerproducts;
