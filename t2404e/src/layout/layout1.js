import { Link } from "react-router-dom";
import Header from "../component/header";
import "../css/layout1.css";
import { useContext } from "react";
import { CurrentUserContext } from "../App";

function Layout1({ children }) {
    const { isLoggedin, setLoggedout, isAdmin } = useContext(CurrentUserContext);

    const handleLogout = () => {
        setLoggedout();
    };

    return (
        <>
            <Header />
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/giohang">Giỏ Hàng</Link>
                </li>
                {isLoggedin && isAdmin && <li><Link to="/admin">Trang Quản Trị</Link></li>}
                {isLoggedin ? (
                    <li>
                        <Link to="/logout" onClick={handleLogout}>Đăng Xuất</Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">Đăng Nhập</Link>
                    </li>
                )}
            </ul>
            {children}
        </>
    );
}

export default Layout1;
