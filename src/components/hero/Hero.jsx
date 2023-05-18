import { useState } from "react";
import styles from "./index.module.scss";

const Hero = () => {
  const [circleSelected, setCircleSelected] = useState(1);

  const selectCircle = (value) => {

    return setCircleSelected(value);

    setCircleSelected(value);
    if (value === 1) {
      setActualImage(() => arrayProva[0]);
    } else if (value === 2) {
      setActualImage(() => arrayProva[1]);
    } else if (value === 3) {
      setActualImage(() => arrayProva[2]);
    }

  };

  const [arrayProva, setArrayProva] = useState([
    "https://www.hynerd.it/wp-content/uploads/2022/03/hogwarts-legacy.jpg",
    "https://www.kotaworld.it/images/2022/09/24/mw2-reveal-meta-share.jpg",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/capsule_616x353.jpg?t=1661971606",
  ]);

  const [actualImage, setActualImage] = useState(
    "https://www.hynerd.it/wp-content/uploads/2022/03/hogwarts-legacy.jpg"
  );

  return (
    <div className={styles.Hero}>
      <div className={styles.mainImage}>
        <img src={actualImage} alt="hero image" />
      </div>
      <ul className={styles.circlesList}>
        <li
          onClick={() => selectCircle(1)}
          className={`${styles.circle} ${
            circleSelected === 1 && styles.circleSelected
          }`}
        ></li>
        <li
          onClick={() => selectCircle(2)}
          className={`${styles.circle} ${
            circleSelected === 2 && styles.circleSelected
          }`}
        ></li>
        <li
          onClick={() => selectCircle(3)}
          className={`${styles.circle} ${
            circleSelected === 3 && styles.circleSelected
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default Hero;
