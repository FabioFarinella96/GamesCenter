
import styles from "../styles/singleGame.module.scss";
import SinglePageLayout from "../src/Layout/SinglePageLayout/SinglePageLayout";

import styles from "./pages-styles/singleGame.module.scss";


import { GETSingleGame } from "../src/utils/http";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

export default function SingleGame() {
  const router = useRouter();

  const [data, setData] = useState({});

  useEffect(() => {
    GETSingleGame(`games/${router.query.slug}`).then((data) => setData(data));
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
            <p className={styles.description}>
              {/* {data?.description_raw.slice(0, 400)} Read more... */}
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <button className={styles.button}>Watch trailer</button>
            <button className={styles.button}>Buy now</button>
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
        {/* <div className={styles.typeGame}>
          <p className={styles.genre}>{data?.genres[0]?.name}</p>
          <p className={styles.genre}>{data?.tags[0]?.name}</p>
          <p className={styles.genre}>{data.platforms?.platform.name}</p>
        </div>
        <p className={styles.description}>
          {data?.description_raw.slice(0, 150)} <span>Read more...</span>
        </p> */}
      </div>
    </SinglePageLayout>
  );
}
