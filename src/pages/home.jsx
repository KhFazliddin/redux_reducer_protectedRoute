import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket, addToPrice, removeBasket } from "../redux/productSlice";

function Home() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const basket = useSelector((state) => state.products.basket);
  const user = useSelector((state) => state.users.user);
  console.log(user);

  const addToBasketBtn = (e) => {
    e.preventDefault();
    dispatch(addToBasket(product));
    dispatch(addToPrice(price));
    setProduct("");
    setPrice("");
  };
  const removeBtn = (e) => {
    e.preventDefault();
    dispatch(removeBasket());
  };

  const styleInput = {
    padding: "10px",
    margin: "10px",
    display: "block",
  };

  return (
    <div>
      {basket.length > 0 ? (
        basket.map((item) => <li>{item}</li>)
      ) : (
        <p>Basket is empty</p>
      )}

      <div className="input">
        <input
          style={styleInput}
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          ref={inputRef}
          placeholder="Name of Product"
          type="text"
        />
        <input
          style={styleInput}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price of Product "
          type="text"
        />

        <button onClick={addToBasketBtn}> Add to Basket</button>
        <button onClick={removeBtn}>Remove All</button>
      </div>

      {user.length > 0 
      ? user.map((item,index) =>(
        <div key={index}>
            {/* <p>{item.name}</p>
            <p>{item.email}</p> */}

        </div>


      ))
       : <p>Add user</p>}
    </div>
  );
}

export default Home;
