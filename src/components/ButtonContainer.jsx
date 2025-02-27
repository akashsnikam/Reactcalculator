import styles from "./ButtonContainer.module.css";

function ButtonContainer({ onButtonClick }) {
  let buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div class={styles.buttonsContainer}>
      {buttonName.map((buttonName) => (
        <button class={styles.button} onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}
export default ButtonContainer;
