import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

////1st way
// const product = (props) => {
//     console.log(props.product);
//     return (
//         <div>
//             {/* <h3>This is Product</h3> */}
//             <h4>{props.product.name}</h4>
//         </div>
//     );
// };


////Accessing: 
// const product = (props) => {
//     console.log(props.product);
//     return (
//         <div className = "product">
//             <div className = "">
//                 <img src={props.product.img} alt="" />
//             </div>
//             <div className = " ">
//                 {/* <h3>This is Product</h3> */}
//             <h4>{props.product.name}</h4>
//             </div>

//         </div>
//     );
// };

////Another way
// const product = (props) => {
//     console.log(props.product);
//     const { img, name, seller, price, stock } = props.product;
//     return (
//         <div className="product">
//             <div className="">
//                 <img src={img} alt="" />
//             </div>
//             <div className=" ">
//                 {/* <h3>This is Product</h3> */}
//                 <h4 className="product-name">{name}</h4>
//                 <br />
//                 <p><small>by: {seller} </small></p>
//                 <p>${price}</p>
//                 <br />
//                 <p><small>Only {stock} left in stock - order soon</small></p>
//                 <button className = "main-button"> <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
//             </div>

//         </div>
//     );
// };

////onClick, eventhandler to child component
const product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className=" ">    
                {/* <h3>This is Product</h3> */}
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller} </small></p>
                <p>${price}</p>
                <br />
                <p><small>Only  {stock} left in stock - order soon</small></p>
                {/* <button  className = "main-button" onClick = {props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button> */}
                <button  className = "main-button" onClick = {() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>

        </div>
    );
};

export default product;