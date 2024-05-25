import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";

const Cart = () => {
  const { cartItems, Food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </div>
        </div>
        <br />
        <hr />
      </div>
      {food_list.map((item, index) => {
        return (
          <div>
            <div className="cart-items-title cart-items-item ">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.price * cartItems[item._id]}</p>
              <p className="cross">x</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
