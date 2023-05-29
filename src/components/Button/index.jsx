import styles from "./styles.module.css";

export default function Button(props) {
  return (
    <>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>{props.text}</button>
      </a>
    </>
  );
}
