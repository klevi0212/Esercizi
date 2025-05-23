import styles from "./index.module.css";
export default function Welcome({ name }) {
  return (
    <>
      <p className={styles.welcome}>
        <strong>{name}</strong>!
      </p>
    </>
  );
}
