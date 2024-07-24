import { Link } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";
import "../css/layout1.css";
function Layout1({children}) {
    return (
        <>
            <Header/>
            <ul className='nav'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/products"}>Sản Phẩm</Link>
                </li>
                <li>
                    <Link to={"/hook"}>Liên Hệ</Link>
                </li>
                <li>
                    <Link to={"/students"}>List Student</Link>
                </li>
                <li>
                    <Link to={"/students"}>Giỏ Hàng</Link>
                </li>
            </ul>

            {children}

            <Footer/>
        </>

    );

}

export default Layout1;