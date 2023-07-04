import styles from "../CSS/NavBar.module.css";
import { ImSearch } from "react-icons/im";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.h2}>CryptoPlace</h2>

      <form className={styles.form} onSubmit={() => console.log("clicked")}>
        <input className={styles.input} placeholder="   search"></input>
        <button type="submit" className={styles.btn}>
          <ImSearch className={styles.search} />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
