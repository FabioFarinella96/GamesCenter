import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { BiSearch, BiUser } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

const Header = ({ input, setModal, search, setInput, modal }) => {
  const [searchActive, setSearchActive] = useState(false);

  const openSearch = () => {
    setModal((prev) => !prev);
  };

  useEffect(() => {
    setSearchActive((prev) => !prev);
  }, [modal]);

  return (
    <div className={styles.Header}>
      <img className={styles.logo} src="./logo.png" alt="logo" />
      {new Date().getHours() >= 17 ? (
        <h2>Good evening!</h2>
      ) : (
        <h2>Good morning!</h2>
      )}
      <img className={styles.logoDesktop} src="./logo.png" alt="logo" />
      <div className={styles.icons}>
        {
          <form
            className={`${styles.searchBar} ${
              searchActive && styles.searchBarActive
            }`}
            onSubmit={search}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search..."
            />
            <div onClick={openSearch} className={styles.cancel}>
              <MdCancel />
            </div>
          </form>
        }
        <BiSearch
          onClick={openSearch}
          className={`${styles.searchIcon} ${
            searchActive && styles.searchIconNone
          }`}
        />
      </div>
    </div>
  );
};

export default Header;
