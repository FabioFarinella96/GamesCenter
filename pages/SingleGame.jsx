import styles from "../styles/singleGame.module.scss";
import SinglePageLayout from "../src/Layout/SinglePageLayout/SinglePageLayout";
import Link from "next/link";

import { GETSingleGame, GETScreenshots } from "../src/utils/http";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

export default function SingleGame() {
  const router = useRouter();

  const [data, setData] = useState({});
  const [wishList, setWishList] = useState(
    typeof window !== "undefined" && localStorage.getItem("wishList")
      ? JSON.parse(localStorage.getItem("wishList"))
      : []
  );
  const [screenShots, setScreenshots] = useState({});

  const onAddCart = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(data));
    }
  };

  const onWishList = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishList", JSON.stringify([...wishList, data]));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (router.query.slug)
        localStorage.setItem("game", JSON.stringify(router.query.slug));
    }
  }, [router.query.slug]);

  useEffect(() => {
    GETSingleGame(`games/${JSON.parse(localStorage.getItem("game"))}`).then(
      (data) => setData(data)
    );
  }, [router.query.slug]);

  useEffect(() => {
    GETScreenshots(router.query.slug).then((data) => setScreenshots(data));
  }, []);

  return (
    <SinglePageLayout>
      <div className={styles.SingleGame}>
        {/* Hero desktop  */}
        <div className={styles.container}>
          <div className={styles.infoGame}>
            <h1 className={styles.title}>
              <MdVerified className={styles.verified} /> {data.name}
            </h1>
            {data.rating > 4 ? (
              <p>
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                {data.rating}
              </p>
            ) : (
              <p>
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} /> {data.rating}
              </p>
            )}
            <div className={styles.typeGames}>
              <p className={styles.genre}>
                {data.genres && data?.genres[0]?.name}
              </p>
              <p className={styles.genre}>{data.tags && data?.tags[0]?.name}</p>
              <p className={styles.genre}>
                {data.platforms && data?.platforms[0]?.platform?.name}
              </p>
            </div>
            <p className={styles.descriptionDesktop}>
              {data.description_raw && data?.description_raw.slice(0, 400)} Read
              more...
            </p>
            <div className={styles.screenShot}>
              <img
                src={screenShots.results && screenShots.results[0].image}
                alt={styles.name}
              ></img>
              <img
                src={screenShots.results && screenShots?.results[1]?.image}
                alt={styles.name}
              ></img>
              <img
                src={screenShots.results && screenShots?.results[2]?.image}
                alt={styles.name}
              ></img>
              <img
                src={screenShots.results && screenShots?.results[3]?.image}
                alt={styles.name}
              ></img>
            </div>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/Wishlist">
              <button onClick={onWishList} className={styles.button}>
                Add to WishList
              </button>
            </Link>
            <Link href="/Cart">
              <button onClick={onAddCart} className={styles.button}>
                Buy now
              </button>
            </Link>
          </div>
        </div>
        <img
          className={styles.heroDesktop}
          src={data.background_image}
          alt={data.name}
        />
        {/* mobile */}
        <div className={styles.hero}>
          <img src={data.background_image_additional} alt={data.name} />
        </div>
        <div className={styles.profileSection}>
          <img src={data.background_image} alt={data.name} />
          <div className={styles.titleSection}>
            <h3 className={styles.title}>
              <MdVerified className={styles.verified} /> {data.name}
            </h3>
            {data.rating > 4 ? (
              <p>
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                {data.rating}
              </p>
            ) : (
              <p>
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} />
                <AiFillStar className={styles.star} /> {data.rating}
              </p>
            )}
          </div>
        </div>
        <div className={styles.typeGame}>
          <p className={styles.genre}>{data.genres && data?.genres[0]?.name}</p>
          <p className={styles.genre}>{data.tags && data?.tags[0]?.name}</p>
          <p className={styles.genre}>
            {data.platforms && data?.platforms[0]?.platform?.name}
          </p>
        </div>
        <p className={styles.description}>
          {data?.description_raw?.slice(0, 150)} <span>Read more...</span>
        </p>
        <h3 className={styles.screenShotsTitle}>Screenshots made by fans</h3>
        <div className={styles.screenShots}>
          <img
            src={screenShots.results && screenShots.results[0].image}
            alt={styles.name}
          ></img>
          <img
            src={screenShots.results && screenShots.results[1].image}
            alt={styles.name}
          ></img>
          <img
            src={screenShots.results && screenShots.results[2].image}
            alt={styles.name}
          ></img>
          <img
            src={screenShots.results && screenShots.results[3].image}
            alt={styles.name}
          ></img>
        </div>
        <div className={styles.ctaButton}>
          <Link href="/Wishlist">
            <button onClick={onWishList} className={styles.button}>
              Add to WishList
            </button>
          </Link>
          <Link href="/Cart">
            <button onClick={onAddCart} className={styles.button}>
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </SinglePageLayout>
  );
}
