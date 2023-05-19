import styles from "./index.module.scss";

const CardItem = ({ game }) => {
  const { name, background_image, platforms } = game;

  return (
    <div className={styles.CardItem}>
      <h4 className={styles.title}>{name}</h4>
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
    </div>
  );
};

export default CardItem;
