import styles from "./Display.module.css";

function Display({ displayValue }) {
  return (
    <input type="text" value={displayValue} class={styles.display} readOnly />
  );
}
export default Display;
