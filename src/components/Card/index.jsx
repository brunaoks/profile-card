import Header from "../Header";
import Bio from "../Bio";
import styles from "./styles.module.css";
import Button from "../Button";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <Header name="Salomão Bruno" avatar="./perfil.jpg" />

      <div>
        <Bio
          bio="Front-end React Developer"
          number="+55 81 98194-6222"
          email="sfbruno2002@gmail.com"
        />
      </div>

      <div>
        <Button
          linkedinUrl="https://www.linkedin.com/in/salomao-bruno/"
          githubUrl="https://github.com/brunaoks"
          portfolioUrl="https://brunaoks.github.io/portfolio-salomao/"
        />
      </div>
    </div>
  );
}
