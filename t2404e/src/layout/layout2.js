import { Link } from "react-router-dom";
import Header from "../component/header";

function Layout2({children}) {
    return (
        <>
            <Header/>
            <ul className='nav'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/products"}>Products</Link>
                </li>
            </ul>
            {children}
        </>
    );

}

export default Layout2;