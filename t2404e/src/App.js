import logo from './logo.svg';
import './App.css';
import FunctionComponent from './component/function_component';
import ClassComponent from './component/class_component';
import Header from './component/header';
import Footer from './component/footer';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Products from './component/products';
import ProductDetail from './component/product_detail';
import { routes, std } from './component/router';
//import file dung chung
function App() {
  return (
    <>
        <h1>{std.name}  {std.age}</h1>
        <Routes>
         {routes.map((item, index) => {
          const Page = item.component;
          const Layout =  item.layout;
          return <Route key={index} path={item.path} element={<Layout><Page/></Layout>}/>
         })}
        </Routes>
      
    </>
    
  );
}

export default App;
