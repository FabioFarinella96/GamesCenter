import styles from "./index.module.scss";
import Header from "../components/header";
import Navbar from "../components/navbar";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
