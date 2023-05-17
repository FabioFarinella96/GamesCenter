import styles from "./index.module.scss";
import { BiSearch, BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.title}>Explore</h1>
      <div className={styles.icons}>
        <BiSearch />
        <BiUser />
      </div>
    </div>
  );
};

export default Header;
