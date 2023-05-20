import styles from "./singleGame/index.module.scss";
import Layout from "../src/Layout/Layout";
import { GET } from "../src/utils/http";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function SingleGame() {
  const router = useRouter();

  const { game } = router.query;

  const [data, setData] = useState({});

  useEffect(() => {
    if (router.isReady) {
      GET(`games/${game}`).then((data) => setData(data));
    }
  }, [router.isReady]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Layout>
      <div className={styles.SingleGame}>
        <p>{data?.description}</p>
      </div>
    </Layout>
  );
}
