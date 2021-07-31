import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css' ;
import Product from '../Product/Product'
import product from '../Product/Product';
import Cart from '../Cart/Cart';


// //create component, navigation, useState()
// const Shop = () => {
//     // console.log(fakeData);
// //first 10 data 
//     const first10 = fakeData.slice(0, 10);
// //declare state
//     const [products, setProducts] =  useState(first10);
//     return (
//         <div className ="shop-container">
//             <h1>This is Shop</h1>
//             <h3>Data Length: {products.length}</h3>
            
//             <ul>
//                 {
//                     products.map(product => <li>{product.name}</li>)
//                 }
//             </ul>
//         </div>
//     );
// };


// //Create Cart container, style, 
// const Shop = () => {
// //first 10 data 
//     const first10 = fakeData.slice(0, 10);
// //declare state
//     const [products, setProducts] = useState(first10);

//     const handleAddProduct = (product) =>{
//         console.log('product added', product);
//     } 

//     return (
//         <div className ="shop-container">
//             <div className = "product-container">
//                 {
//                     // products.map(product => <Product>{product.name}</Product>)
                    
//                     //data pass to component (41 line: productComp)
//                     products.map(pd => <Product
//                         handleAddProduct = {handleAddProduct}
//                         product = {pd}>
//                         </Product>)
//                 }
//             </div>
//             <div className="cart-container">
//                 <h3>This is cart</h3>
//             </div>
        
//         </div>
//     );
// };


//Add Cart:oder summary, setCart
const Shop = () => {
//first 10 data 
    const first10 = fakeData.slice(0, 10);
//declare state
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])


    const handleAddProduct = (product) =>{
        console.log('product added', product);
        const newCart = [...cart, product]
        setCart(newCart)
    } 

    return (
        <div className ="shop-container">
            <div className = "product-container">
                {
                    // products.map(product => <Product>{product.name}</Product>)
                    
                    //data pass to component (41 line: productComp)
                    products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                        product = {pd}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                {/* <h3>This is cart</h3>
                <h5>Oder Summary: {cart.length}</h5> */}
                <Cart cart={cart}></Cart>
            </div>
        
        </div>
    );
};

export default Shop;