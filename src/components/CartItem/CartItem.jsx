import { useEffect, useState } from "react";
import styles from "./index.module.scss";

import { HiOutlineTrash } from "react-icons/hi";

const CartItem = ({ data, setCartData }) => {
  const { slug, name, background_image, metacritic } = data;

  const [backActive, setBackActive] = useState(false);
  const [cart, setCart] = useState(
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  const activeBack = () => {
    setBackActive((prev) => !prev);
  };

  const deleteCartItem = () => {
    setCartData((prev) => [...prev.filter((game) => game.slug !== slug)]);
  };

  const prices = {
    price1: "$ 29.99",
    price2: "$ 49,99",
    price3: "$ 9,99",
  };

  return (
    <div className={styles.CartItem}>
      <div className={styles.back}>
        <div onClick={deleteCartItem} className={styles.delete}>
          <HiOutlineTrash />
        </div>
      </div>
      <div className={`${styles.face} ${backActive && styles.faceInactive}`}>
        <img src={background_image} alt={name} />
        <div className={styles.description}>
          <div className={styles.itemTitles}>
            <h5>{name}</h5>
            <span>Standard edition</span>
          </div>
          <div className={styles.itemPrice}>
            <p>Price:</p>
            {metacritic <= 50 && <span>{prices.price1}</span>}
            {metacritic > 50 && <span>{prices.price2}</span>}
            {metacritic < 20 && <span>{prices.price3}</span>}
          </div>
        </div>
        <div className={styles.itemMore} onClick={activeBack}>
          <p>{">"}</p>
        </div>
        <div className={styles.actions}>
          <div onClick={deleteCartItem} className={styles.delete}>
            <span>
              <HiOutlineTrash />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
