import styles from "../styles/wishlist.module.scss";
import Layout from "../src/Layout";
import WishListCard from "../src/components/wishListCard/WishListCard";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Wishlist() {
  const [wishList, setWishList] = useState(
    typeof window !== "undefined" && localStorage.getItem("wishList")
      ? JSON.parse(localStorage.getItem("wishList"))
      : []
  );

  useEffect(() => {
    typeof window !== "undefined" &&
      localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <Layout>
      <div className={styles.Wishlist}>
        <h2 className={styles.title}>WishList</h2>
        {wishList.length > 0 ? (
          wishList.map((data) => (
            <WishListCard data={data} setWishList={setWishList} key={data.id} />
          ))
        ) : (
          <p className={styles.message}>
            Your WishList is empty. <br /> Start adding your favourite games{" "}
            <br /> <Link href="/">Go Home</Link>
          </p>
        )}
      </div>
    </Layout>
  );
}
