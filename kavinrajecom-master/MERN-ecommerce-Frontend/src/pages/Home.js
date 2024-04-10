import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import imageSrc from './images/original.png';

function Home() {
    return (
        <div>
            <NavBar>
                <div>
                    {/* Use the imported image path */}
                    <img src={imageSrc} alt="Example" style={{ width: '1500px', height: '500px' }} />
                </div><br></br>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
    );
}

export default Home;