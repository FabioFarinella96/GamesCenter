import styles from "./index.module.scss";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsBookmarkStar } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.iconsList}>
        <li>
          <BsBookmarkStar className={styles.navIcon} />
        </li>
        <li>
          <BiHomeAlt2 className={styles.navIcon} />
        </li>
        <li>
          <RiShoppingCartLine className={styles.navIcon} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
