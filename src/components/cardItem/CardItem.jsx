import styles from "./index.module.scss";

const CardItem = ({ game }) => {
  return (
    <div className={styles.CardItem}>
      <h1>{game.name}</h1>
    </div>
  );
};

export default CardItem;
