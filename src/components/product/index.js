import React from 'react'
import { formatValue } from '../../services/utils'
import './styles.css'

const Product = ({ data: { product } }) => (
    <div>
    <a href="" className="list-group-item" >
        <div className="row">
            <div className="col-4 product-item">
                {product.pictures.photo_1 ? <img src={product.pictures.photo_1} className="img-responsive" height="60px" alt='first' /> : ''}
                {product.pictures.photo_2 ? <img src={product.pictures.photo_2} className="img-responsive" height="60px" alt='second' /> : ''}
                {product.pictures.photo_3 ? <img src={product.pictures.photo_3} className="img-responsive" height="60px" alt='third' /> : ''}
                {product.pictures.photo_4 ? <img src={product.pictures.photo_4} className="img-responsive" height="60px" alt='fourth' /> : ''}
            </div>
            <div className="col-4 product-title">
                <div className='row'>
                    <h5>{product.title}</h5>
                </div>
                <div className="row">
                    <p>{product.category} &bull; {product.type}</p>
                </div>
            </div>
            <div className="col-4 product-price">
                <del>{formatValue(product.price)}</del> por <span>{formatValue(product.discount_price)}</span>
            </div>
        </div>
    </a>
    </div>
);

export default Product;