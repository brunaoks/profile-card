import styles from "./styles.module.css";

export default function Button(props) {
  return (
    <div className={styles.links}>
      <a href={props.linkedinUrl} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a href={props.portfolioUrl} target="_blank" rel="noopener noreferrer">
        Portfólio
      </a>
    </div>
  );
}
