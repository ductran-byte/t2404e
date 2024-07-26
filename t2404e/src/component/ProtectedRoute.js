import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../App";

const ProtectedRoute = ({ children }) => {
    const { isAdmin } = useContext(CurrentUserContext);
    const location = useLocation();

    if (!isAdmin) {
        // Nếu không phải admin, chuyển hướng về trang đăng nhập và lưu lại đường dẫn hiện tại
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children; // Nếu là admin, hiển thị nội dung của route
};

export default ProtectedRoute;
