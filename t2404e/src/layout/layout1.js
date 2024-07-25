import { Link } from "react-router-dom";
import Header from "../component/header";
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
                    <Link to={"/giohang"}>Giỏ Hàng</Link>
                </li>


            </ul>

            {children}


        </>

    );

}

export default Layout1;