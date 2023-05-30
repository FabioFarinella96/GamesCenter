import styles from "./index.module.scss";
import { AiFillHeart, AiFillCloseCircle } from "react-icons/ai";

const WishListCard = ({ data, setWishList }) => {
  const { name, background_image, slug } = data;

  const deleteWishListItem = () => {
    setWishList((prev) => [...prev.filter((game) => game.slug !== slug)]);
  };

  return (
    <div className={styles.WishListCard}>
      <img className={styles.image} src={background_image} alt={name} />
      <h1 className={styles.title}>{name}</h1>
      <AiFillHeart className={styles.heart} />
      <p className={styles.removeBtn} onClick={deleteWishListItem}>
        <AiFillCloseCircle />
      </p>
    </div>
  );
};

export default WishListCard;
