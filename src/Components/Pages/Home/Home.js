import Footer from "../Footer/Footer";
import Posthome from "../Posts/Postshome";
import Productshome from "../Products/Productshome"
import Slider from "../Slider/Slider";

const Home = () => {
    return ( 
        <div className="col-12 text-white mt-2">
            <Slider />
            <Productshome /> 
            <Posthome />
            <Footer/>          
        </div>
     );
}
 
export default Home;