import { useState } from "react";
import styles from "./index.module.scss";

import { HiOutlineTrash } from "react-icons/hi";

const CartItem = () => {
  const [backActive, setBackActive] = useState(false);

  const activeBack = () => {
    setBackActive((prev) => !prev);
  };

  return (
    <div className={styles.CartItem}>
      <div className={styles.back}>
        <div className={styles.qnt}>
          <div className={styles.decrease}>-</div>
          <div className={styles.nQnt}>1</div>
          <div className={styles.increase}>+</div>
        </div>
        <div className={styles.delete}>
          <HiOutlineTrash />
        </div>
      </div>
      <div className={`${styles.face} ${backActive && styles.faceInactive}`}>
        <img
          src="https://www.hynerd.it/wp-content/uploads/2022/03/hogwarts-legacy.jpg"
          alt="cartImg"
        />
        <div className={styles.description}>
          <div className={styles.itemTitles}>
            <h5>Hogwarts Legacy</h5>
            <span>Standard edition</span>
          </div>
          <div className={styles.itemPrice}>
            <p>Price:</p>
            <span>13,65$</span>
          </div>
        </div>
        <div className={styles.itemMore} onClick={activeBack}>
          <p>{">"}</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.qnt}>
            <div className={styles.decrease}>-</div>
            <div className={styles.nQnt}>1</div>
            <div className={styles.increase}>+</div>
          </div>
          <div className={styles.delete}>
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
