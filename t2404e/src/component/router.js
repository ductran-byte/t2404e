import Layout1 from "../layout/layout1";
import FormStudent from "./FormStudent";
import Home from "./home";
import HookComponent from "./hook";
import ListStudent from "./ListStudent";
import Products from "./products";
import Giohang from "./giohang";

const std = {}


const routes = [
    {path:"/", component: Products, layout: Layout1},
    {path:"/hook", component: HookComponent, layout: Layout1},
    {path:"/admin", component: ListStudent, layout: Layout1},
    {path:"/student/form/:id?", component: FormStudent, layout: Layout1},
    {path:"/giohang", component: Giohang, layout: Layout1},

]

export {routes, std}