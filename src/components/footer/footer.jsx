import React from 'react';
import styles from "../../styles/footer/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Edward mãos de programador. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
