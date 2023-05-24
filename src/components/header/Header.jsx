import styles from "./index.module.scss";
import { BiSearch, BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <div className={styles.Header}>
      {new Date().getHours() >= 17 ? (
        <h2>Good evening!</h2>
      ) : (
        <h2>Good morning!</h2>
      )}
      <div className={styles.icons}>
        <BiSearch className={styles.search} />
        <BiUser />
      </div>
    </div>
  );
};

export default Header;
