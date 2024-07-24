import React from 'react';
import Product from './product';
import '../css/product.css';

function Products() {
    const products = [
        {
            id: 1,
            name: "iPhone 14 Pro Max 128GB",
            price: 27990000,
            discount: 5,
            originalPrice: 29990000,
            image: "/img/flip6.png",
            promotion: "Giảm thêm 5% khi thanh toán qua VNPAY"
        },
        {
            id: 2,
            name: "Samsung Galaxy S23 Ultra 5G 256GB",
            price: 29990000,
            image: "https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2024_5_23_638520678190023465_tecno-camon-30-den-1.jpg",
        },
        {
            id: 3,
            name: "Xiaomi 13 8GB - 256GB",
            price: 15490000,
            discount: 10,
            originalPrice: 17490000,
            image: "https://cdn.tgdd.vn/Products/Images/42/248300/xiaomi-13-xanh-thumb-600x600.jpg",
        },
        {
            id: 4,
            name: "OPPO Reno8 T 5G 8GB - 128GB",
            price: 9990000,
            image: "https://cdn.tgdd.vn/Products/Images/42/252220/oppo-reno8-t-5g-vang-thumb-600x600.jpg",
            promotion: "Thu cũ đổi mới - Trợ giá đến 1.000.000đ"
        },
        {
            id: 5,
            name: "OPPO Reno8 T 5G 8GB - 128GB",
            price: 9990000,
            image: "https://cdn.tgdd.vn/Products/Images/42/252220/oppo-reno8-t-5g-vang-thumb-600x600.jpg",
            promotion: "Thu cũ đổi mới - Trợ giá đến 1.000.000đ"
        },
        {
            id: 6,
            name: "OPPO Reno8 T 5G 8GB - 128GB",
            price: 9990000,
            image: "https://cdn.tgdd.vn/Products/Images/42/252220/oppo-reno8-t-5g-vang-thumb-600x600.jpg",
            promotion: "Thu cũ đổi mới - Trợ giá đến 1.000.000đ"
        },
        // ...Thêm các sản phẩm khác ở đây
    ];


    return (
        <div className="products-page">
            <div className="products-header">
                <h1>Danh Sách Sản Phẩm</h1>
                <div className="filter-options">
                    {/* Thêm các tùy chọn lọc sản phẩm tại đây nếu cần */}
                </div>
            </div>
            <div className="product-list">
                {products.map(product => (
                    <div className="product-item" key={product.id}>
                        <Product product={product}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
