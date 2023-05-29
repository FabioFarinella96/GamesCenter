import styles from "./index.module.scss";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import { GETSingleGame } from "../../utils/http";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SinglePageLayout = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [warn, setWarn] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    GETSingleGame(`games/${input.replaceAll(" ", "-").toLowerCase()}`).then(
      (data) => setData(() => data)
    );
    setModal(false);
  };

  useEffect(() => {
    if (data.status !== 404) {
      const slug = data.slug;
      router.push({
        pathname: "SingleGame",
        query: { slug },
      });
    }
    setInput("");
  }, [data]);

  return (
    <div className={styles.SinglePageLayout}>
      <Header
        input={input}
        setInput={setInput}
        setModal={setModal}
        search={search}
      />
      {children}
      <Navbar />
      <div className={`${styles.modal} ${modal && styles.modalActive}`}>
        <form onSubmit={search} className={styles.searchBar}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          <div className={styles.searchBtn}>
            <BiSearch />
          </div>
        </form>
      </div>
      <div className={`${styles.warn} ${warn && styles.warnActive}`}>
        <p>La ricerca non ha prodotto alcun risultato!</p>
      </div>
    </div>
  );
};

export default SinglePageLayout;
