import styles from "./index.module.scss";

const CardItem = ({ game }) => {
  const { name, background_image, platforms } = game;

  return (
    <div className={styles.CardItem}>
      <h4 className={styles.title}>{name}</h4>
      <p
        className={`${styles.platform} ${
          platforms[0].platform.name === "PlayStation 4" && styles.ps4
        }
          ${platforms[0].platform.name === "Xbox One" && styles.xbox}
          ${platforms[0].platform.name === "Xbox 360" && styles.xbox}
          ${platforms[0].platform.name === "Xbox Series S/X" && styles.xbox}
          ${platforms[0].platform.name === "Nintendo Switch" && styles.nintendo}
        `}
      >
        {platforms[0].platform.name}
      </p>
      <img className={styles.image} src={background_image} alt={name} />
    </div>
  );
};

export default CardItem;
