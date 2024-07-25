import React from 'react';
import * as gioHangService from "../service/giohang";
import {addItemToGioHang} from "../service/giohang";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
    const navigate = useNavigate();

    const addGioHang = () => {
        const addItem = async () => {
            await addItemToGioHang(product.name, 1, 100, product.pic);
            return navigate("/giohang");
        };
        addItem();
    };

    return (
        <div className="product-item" style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #ddd',
            borderRadius: '5px',
            overflow: 'hidden'
        }}>
            <div className="product-image" style={{
                position: 'relative',
                width: '350px',
                height: '450px', // Điều chỉnh chiều cao theo ý muốn
                overflow: 'hidden'
            }}>
                <img src={product.pic} alt={product.name} style={{
                    width: '600px',
                    height: '500px',
                    objectFit: 'cover', // Đảm bảo ảnh lấp đầy khung
                    transition: 'transform 0.3s ease'
                }}/>

            </div>
            <div className="product-info" style={{padding: '15px', textAlign: 'center'}}>
                <h3 className="product-name" style={{
                    fontSize: '1.2em',
                    marginBottom: '10px',
                    color: '#333'
                }}>{product.name}</h3>
                <button onClick={() => addGioHang()} className="add-to-cart" style={{
                    backgroundColor: '#f0ad4e',
                    color: 'white',
                    padding: '8px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '100%'
                }}>Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
}

export default Product;

