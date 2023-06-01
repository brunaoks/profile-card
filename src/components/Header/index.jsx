import styles from "./styles.module.css";

export default function Header(props) {
  return (
    <div>
      <img src={props.avatar} alt={props.name} />
      <p className={styles.name}>{props.name}</p>
    </div>
  );
}
