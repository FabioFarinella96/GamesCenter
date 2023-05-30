import styles from "./index.module.scss";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsBookmarkStar } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.iconsList}>
        <Link href="/Wishlist">
          <li>
            <BsBookmarkStar className={styles.navIcon} />
          </li>
        </Link>
        <Link href="/">
          <li>
            <BiHomeAlt2 className={styles.navIcon} />
          </li>
        </Link>
        <li>
          <Link href={"/Cart"}>
            <RiShoppingCartLine className={styles.navIcon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
