import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const { isAdmin, isLoggedin, setLoggedout } = useContext(CurrentUserContext);

    const navigate = useNavigate();

    console.log(isAdmin, isLoggedin);
    useEffect(() => {
        setLoggedout();
        return navigate("/");
    });

    return;
}
