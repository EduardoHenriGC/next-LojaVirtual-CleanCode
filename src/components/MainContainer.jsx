import Navbar from "./Navbar/Navbar";
import Footer from "./footer/footer";
import styles from "../styles/MainContainer/MainContainer.module.css"

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>{children}</div>

      <Footer/>
      </>
  );
}
