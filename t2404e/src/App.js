import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './component/products';
import ProductDetail from './component/product_detail';
import { routes, std } from './component/router';
import { createContext, useState } from "react";

export const CurrentUserContext = createContext({
    isAdmin: true,
    isLoggedin: false,
    setAdmin: () => {},
    setLoggedin: () => {},
    setLoggedout: () => {},
});

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);

    const setLoggedin = () => setIsLoggedin(true);
    const setLoggedout = () => setIsLoggedin(false);
    const setAdmin = () => setIsAdmin(true);
    return (
        <CurrentUserContext.Provider
            value={{
                isAdmin,
                isLoggedin,
                setAdmin,
                setLoggedin,
                setLoggedout
            }}
        >
            <>
                <h1>{std.name}  {std.age}</h1>
                <Routes>
                    {routes.map((item, index) => {
                        const Page = item.component;
                        const Layout = item.layout;
                        return <Route key={index} path={item.path} element={<Layout><Page /></Layout>} />
                    })}

                </Routes>
            </>
        </CurrentUserContext.Provider>

    );
}

export default App;
