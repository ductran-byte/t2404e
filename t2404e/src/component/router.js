import Layout1 from "../layout/layout1";
import Layout2 from "../layout/layout2";
import FormStudent from "./FormStudent";
import Home from "./home";
import HookComponent from "./hook";
import ListStudent from "./ListStudent";
import Products from "./products";
import giohang from "./giohang";

const std = {}


const routes = [
    {path:"/", component: Home, layout: Layout1},
    {path:"/products", component: Products, layout: Layout1},
    {path:"/hook", component: HookComponent, layout: Layout1},
    {path:"/students", component: ListStudent, layout: Layout1},
    {path:"/student/form/:id?", component: FormStudent, layout: Layout1},
    {path:"/giohang", component: giohang, layout: Layout1},

]

export {routes, std}