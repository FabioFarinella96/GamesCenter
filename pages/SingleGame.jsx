import styles from "./singleGame/index.module.scss";
import Layout from "../src/Layout/Layout";
import { GET } from "../src/utils/http";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function SingleGame() {
  const router = useRouter();

  const [data, setData] = useState({});

  useEffect(() => {
    GET(`games/${router.query.slug}`).then((data) => setData(data));
  }, []);

  return (
    <Layout>
      <div className={styles.SingleGame}>
        <p>{data?.description_raw}</p>
      </div>
    </Layout>
  );
}
