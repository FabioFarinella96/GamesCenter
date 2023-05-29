import Layout from "../src/Layout";
import styles from "../styles/cart.module.scss";
import { RiShoppingCartLine } from "react-icons/ri";
import CartItem from "../src/components/CartItem/CartItem";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";

export default function Cart() {
  const [cartData, setCartData] = useState([
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  ]);

  const goBack = () => {
    window.history.back();
  };
  return (
    <Layout>
      <div className={styles.Cart}>
        <div className={styles.titleNav}>
          <div className={styles.goBack} onClick={goBack}>
            <BiArrowBack />
          </div>
          <h1>Cart</h1>
        </div>
        <h2>Checkout</h2>
        <div className={styles.cartList}>
          {cartData.length > 0 ? (
            cartData.map((data) => (
              <CartItem data={data} setCartData={setCartData} key={data.id} />
            ))
          ) : (
            <p>Il carrello è vuoto.</p>
          )}
        </div>
        <div className={styles.checkout}>
          <div className={styles.totPrice}>
            <span>Total:</span>
            <span className={styles.price}>13,45$</span>
          </div>
          <div className={styles.goPay}>
            <RiShoppingCartLine /> Go to payment
          </div>
        </div>
      </div>
    </Layout>
  );
}
