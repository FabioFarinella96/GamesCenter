import Layout from "../src/Layout";
import styles from "../styles/cart.module.scss";
import { RiShoppingCartLine } from "react-icons/ri";
import CartItem from "../src/components/CartItem/CartItem";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Cart() {
  const [cartData, setCartData] = useState(
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

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
          {cartData ? (
            cartData.map((data) => (
              <CartItem data={data} setCartData={setCartData} key={data.id} />
            ))
          ) : (
            <div className={styles.emptyCart}>
              <p>Il carrello è vuoto.</p>
              <Link href="/">
                <p>Torna alla Home</p>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.checkout}>
          <div className={styles.goPay}>
            <RiShoppingCartLine /> Go to payment
          </div>
        </div>
      </div>
    </Layout>
  );
}
