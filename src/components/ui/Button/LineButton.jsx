import styles from './Button.module.scss';

const LineButton = ({ text, handler }) => {
  return (
    <button
      type="button"
      className={styles.lineButton}
      onClick={handler}
    >
      <span>{text}</span>
    </button>
  );
};

export default LineButton;
