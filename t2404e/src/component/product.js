import React from 'react';
import '../css/product.css';

function Product({ product }) {
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={`../img/${product.image}`} alt={product.name} />
                {product.discount && <div className="discount-label">-{product.discount}%</div>}
                <div className="installment-label">Trả góp 0%</div>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                    {product.discount ? (
                        <>
                            <span className="old-price">{product.originalPrice.toLocaleString()}₫</span>
                            <span className="new-price">{product.price.toLocaleString()}₫</span>
                        </>
                    ) : (
                        <span>{product.price.toLocaleString()}₫</span>
                    )}
                </p>
                {product.promotion && <p className="product-promotion">{product.promotion}</p>}
                <button className="add-to-cart">Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
}

export default Product;
