import { createContext, useEffect, useState } from "react";
const NameContext = createContext();

function HookComponent() {
    const [name, setName] = useState("Nguyen Van A");

    const [counter, setCounter] = useState(1)
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const handleName = () => {
        setName("Nguyen Van B");
    }

    const handleCouter = () => {
        setCounter(counter + 1);
    }

    // useEffect
    // 2 đối số : 1: callback function ,2 dependency : optional
    // khi compoment được mounted thì gọi useEffect này
    //TH1: không có depedency : khi nao component được re-render lại -> được gọi
    //Th2 : có dependency
    // + mảng dependency rong : chỉ gọi 1 lan duy nhat
    // + có dependency : khi nao ma state của dependency thay doi thì sẽ được gọi lại
    useEffect(()=>{
        console.log("call useEffect");
        // call api lấy danh sách sản phẩm theo trang
        setProducts()
        // setCounter(counter => counter + 1);
    }, [page]);

    const value = {
        name,
        counter
    }
    
    
    return(
        <NameContext.Provider value={value}>
            <h1>Hook Component</h1>
            <h1>{name}</h1>
            <h1>{counter}</h1>
            <button onClick={handleName}>Change name</button>
            <button onClick={handleCouter}>ADD</button>
        </NameContext.Provider>
    );
}

export {NameContext}

export default HookComponent;