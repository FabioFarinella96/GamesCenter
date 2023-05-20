import styles from "./index.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";

const CardItem = ({ game }) => {
  const { slug, name, background_image, platforms, genres } = game;

  const router = useRouter();

  const openGame = () => {
    router.push({
      pathname: "SingleGame",
      query: { slug },
    });
  };

  return (
    <div className={styles.CardItem}>
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.genres}>{genres[0]?.name}</p>
      <p
        className={`${styles.platform} ${
          platforms[0].platform.name.includes("PlayStation") && styles.ps4
        }
          ${platforms[0].platform.name.includes("Xbox") && styles.xbox}
          ${platforms[0].platform.name.includes("Nintendo") && styles.nintendo}
        `}
      >
        {platforms[0].platform.name}
      </p>
      <img className={styles.image} src={background_image} alt={name} />

      <p className={styles.seeMore} onClick={openGame}>
        See more <BsArrowRightShort className={styles.icon} />
      </p>
    </div>
  );
};

export default CardItem;
