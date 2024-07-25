import React, {useEffect, useState} from 'react';
import Product from './product';
import '../css/product.css';
import * as studentService from "../service/student";

function Products() {

    const [students, setStudents] = useState([]);
    useEffect(()=> {
        const getAll = async () => {
            const result = await studentService.getAllStudent();
            setStudents(result);
            console.log(result)
        }
        getAll();
    }, []);
    return (
        <div className="products-page">
            <div className="products-header">
                <h1>Danh Sách Sản Phẩm</h1>
                <div className="filter-options">
                </div>
            </div>
            <div className="product-list">
                {students.map(students => (
                    <div className="product-item" key={students.id}>
                        <Product product={students}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
