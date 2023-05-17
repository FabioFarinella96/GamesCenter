import { useState } from "react";
import styles from "./index.module.scss";

const Hero = () => {
  const [circleSelected, setCircleSelected] = useState(1);

  const selectCircle = (value: number): void => {
    return setCircleSelected(value);
  };

  return (
    <div className={styles.Hero}>
      <img
        src="https://www.hynerd.it/wp-content/uploads/2022/03/hogwarts-legacy.jpg"
        alt="hero image"
        className={styles.mainImage}
      />
      <div className={styles.overflow}>
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
    </div>
  );
};

export default Hero;
