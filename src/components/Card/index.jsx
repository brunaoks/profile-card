import styles from "./styles.module.css";
import Button from "../Button";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <img
            className={styles.perfil}
            src="./perfil.jpg"
            alt="Profile photo"
          />
          <p className={styles.perfilTitle}>Salomão Bruno</p>

          <div className={styles.bio}>
            <p className={styles.bioText}>React Developer</p>
            <p className={styles.bioText}>+55 81 98194-6222</p>
            <p className={styles.bioText}>sfbruno2002@gmail.com</p>
          </div>

          <div className={styles.buttonGroup}>
            <Button
              text="LinkedIn"
              url="https://www.linkedin.com/in/salomao-bruno/"
            />
            <Button text="GitHub" url="https://github.com/brunaoks" />
            <Button
              text="Portfólio"
              url="https://brunaoks.github.io/portfolio-salomao/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
