import styles from "./index.module.scss";
import CardItem from "../cardItem";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      <h2 className={styles.title}>Top games</h2>
      <p className={styles.subtitle}>
        Here you can find some of the most loved games
      </p>
      <div className={styles.list}>
        {data.results?.map((game) => (
          <CardItem game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
