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

  const [payActive, setPayActive] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const activatePayment = () => {
    setPayActive((prev) => !prev);
  };

  const activatePopUp = () => {
    setPopUp(true);
    setPayActive(false);

    setInterval(() => {
      setPopUp(false);
    }, 3000);
  };

  const payCompleted = (e) => {
    e.preventDefault();
    activatePayment();
    setCartData(() => []);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <Layout>
      <div className={styles.Cart}>
        <div
          className={`${styles.payModal} ${payActive && styles.payModalActive}`}
        >
          <div onClick={activatePayment} className={styles.overflow}></div>
          <form onSubmit={payCompleted} className={styles.payment}>
            <h3>Name</h3>
            <div className={styles.name}>
              <input placeholder="Name*" type="text" required />
              <input placeholder="LastName*" type="text" required />
            </div>
            <h3>Credit card</h3>
            <div className={styles.creditCard}>
              <input
                className={styles.left}
                type="text"
                placeholder="name on card*"
                required
              />
              <input
                className={styles.right}
                type="date"
                placeholder="expiry*"
                required
              />
              <input
                className={styles.left}
                type="number"
                placeholder="card number*"
                required
              />
              <input
                className={styles.right}
                type="password"
                placeholder="cvv*"
                required
              />
            </div>
            <h3>Position</h3>
            <div className={styles.position}>
              <input type="country" placeholder="country*" required />
              <input type="number" placeholder="postcode*" required />
            </div>
            <button onClick={activatePopUp} className={styles.payNow}>
              Pay now
            </button>
          </form>
        </div>
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
            <div className={styles.emptyCart}>
              <p>Il carrello è vuoto.</p>
              <Link href="/">
                <p>Torna alla Home</p>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.checkout}>
          {cartData.length > 0 ? (
            <div onClick={activatePayment} className={styles.goPay}>
              <RiShoppingCartLine /> Go to payment
            </div>
          ) : (
            <div className={styles.goPayInactive}>
              <RiShoppingCartLine /> Go to payment
            </div>
          )}
        </div>
        {popUp && (
          <div className={styles.popUp}>
            <p>Thanks for your order! We hope to see you again soon</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
