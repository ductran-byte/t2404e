import { memo } from "react";
import Component2 from "./Component2";

function Component1() {
    console.log("re-render component 1");
    return (
        <>
            <Component2 />
            {/* <h1> Component 1 : {count}</h1> */}
        </>
    );
}

export default memo(Component1);