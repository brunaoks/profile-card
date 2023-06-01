import styles from "./styles.module.css";

export default function Bio(props) {
  return (
    <div>
      <h2>{props.bio}</h2>
      <h2>{props.number}</h2>
      <h2>{props.email}</h2>
    </div>
  );
}
