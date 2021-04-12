import React from 'react';


const Inventory = () => {
    const handelAddProduct = ()=>{
        const product ={};
        fetch('https://polar-oasis-96910.herokuapp.com/addProduct',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(product)
        })
    }

    return (
        <div>
            <form action="">
                <p><span>Name</span><input type="text"/></p>
                <p><span>Price</span><input type="text"/></p>
                <p><span>Quantity</span><input type="text"/></p>
                <p><span>Product Image</span><input type="file"/></p>

              <button onClick={handelAddProduct}>Add Product</button>
            </form>
            
        </div>
    );
};

export default Inventory;