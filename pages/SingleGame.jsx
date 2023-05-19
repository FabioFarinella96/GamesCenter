import styles from "./singleGame/index.module.scss";
import Layout from "../src/Layout/Layout";
import { useRouter } from "next/router";

export default function SingleGame() {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.SingleGame}></div>
    </Layout>
  );
}
