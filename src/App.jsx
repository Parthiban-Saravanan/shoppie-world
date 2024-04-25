import React, { useState } from 'react';
import './index.css';

const products = [
  { id: 1, imageUrl: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fd66379451d9539271f7075_fancy.jpg', name: 'Fancy Product', description: 'This is a fancy product.' },
  { id: 2, imageUrl: 'https://i.etsystatic.com/24351301/r/il/fc8fef/2768202303/il_fullxfull.2768202303_dw2u.jpg', name: 'Special Item', description: 'This is a special item.' },
  { id: 3, imageUrl: 'https://www.fabulousmomlife.com/wp-content/uploads/2018/10/choosing-baby-products.jpeg', name: 'Baby Product', description: 'This is a baby Product.' },
  { id: 4, imageUrl: 'https://www.stjosephschoolelgin.org/wp-content/uploads/2019/08/How-Modern-Gadgets-help-in-Bringing-the-Future-Closer.jpg', name: 'Electric Product', description: 'This is an electric Product.' },
];

// The Product component
const Product = ({ product, handleCartChange }) => {
  const [inCart, setInCart] = useState(false);
 
  const toggleCart = () => {
    setInCart(!inCart);
    handleCartChange(product.id);
  };

  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={toggleCart}>
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>

  );
};

// The Cart component
const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Items in cart: {cartItems.length}</p>
    </div>
  );
};

// The main App component
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartChange = (productId) => {
    if (cartItems.includes(productId)) {
      setCartItems(cartItems.filter((id) => id !== productId));
    } else {
      setCartItems([...cartItems, productId]);
    }
  };

  return (
    <>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
      <h1 className="heading">Shoppie World</h1>
      <div className="product-list">
        <Cart cartItems={cartItems} />
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleCartChange={handleCartChange}
          />
        ))}
      </div>
    </>
  );
};

export default App;
