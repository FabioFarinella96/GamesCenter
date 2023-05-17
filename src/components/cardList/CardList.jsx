import styles from "./index.module.scss";
import CardItem from "../cardItem";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      {data.results?.map((game) => (
        <CardItem game={game} key={game.id} />
      ))}
    </div>
  );
};

export default CardList;
