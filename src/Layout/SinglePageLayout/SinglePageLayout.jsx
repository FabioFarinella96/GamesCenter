import styles from "./index.module.scss";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const SinglePageLayout = ({ children }) => {
  return (
    <div className={styles.SinglePageLayout}>
      <Header />
      {children}
      <Navbar />
    </div>
  );
};

export default SinglePageLayout;
