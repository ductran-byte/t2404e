import React, {useState} from 'react';
import '../css/product.css';
import * as gioHangService from "../service/giohang";
import {addItemToGioHang} from "../service/giohang";
import { useNavigate, useParams } from "react-router-dom";


function Product({ product }) {
    const navigate = useNavigate();

    const addGioHang = () => {
        const addItem = async () => {
            await gioHangService.addItemToGioHang(product.name,  1,  100);
            return navigate("/giohang");
        }
        addItem();
    }
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={`${product.image}`} alt={product.name} />
                {/*{product.discount && <div className="discount-label">-{product.discount}%</div>}*/}
                <div className="installment-label"></div>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                    {/*{product.discount ? (*/}
                    {/*    <>*/}
                    {/*        <span className="old-price">{product.originalPrice.toLocaleString()}₫</span>*/}
                    {/*        <span className="new-price">{product.price.toLocaleString()}₫</span>*/}
                    {/*    </>*/}
                    {/*) : (*/}
                    {/*    <span>{product.price.toLocaleString()}₫</span>*/}
                    {/*)}*/}
                </p>
                {/*{product.promotion && <p className="product-promotion">{product.promotion}</p>}*/}
                <button onClick={()=>addGioHang()} className="add-to-cart">Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
}

export default Product;
