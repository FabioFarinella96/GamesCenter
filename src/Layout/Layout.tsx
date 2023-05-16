import styles from "./index.module.scss";

import Header from "../components/header";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
