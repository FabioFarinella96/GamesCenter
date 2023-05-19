import styles from "./index.module.scss";

const CardItem = ({ game }) => {
  const { name, background_image, platforms, genres } = game;

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
      <p className={styles.seeMore}>See more</p>
    </div>
  );
};

export default CardItem;