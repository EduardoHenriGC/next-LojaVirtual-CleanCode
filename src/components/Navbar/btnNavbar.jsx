import styles from "../../styles/Navbar/BtnNavbar.module.css";

export default function BtnNavbar({ isOpen, toggleMenu }) {
  return (
    <button
      className={`${styles.menuBtn} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
    >
      <span className={styles.menuIcon}></span>
      <hr className={styles.menuIcon} />
      <span className={styles.menuIcon}></span>
    </button>
  );
}
