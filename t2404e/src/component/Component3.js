import { useContext } from "react";
import { NameContext } from "./hook";


function Component3() {
    const value = useContext(NameContext)
    return <h1>Component 3: {value.counter}</h1>
}
export default Component3;