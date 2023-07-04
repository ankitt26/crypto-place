import Navbar from "./NavBar";
import styles from "../CSS/HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.card1}>
          <img className={styles.img1} src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h3 className={styles.name}>Coin</h3>
              <h4 className={styles.symbol}>Symbol</h4>
              <h4 className={styles.price}>Current Price</h4>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h3 className={styles.name}>Bitcoin</h3>
              <h4 className={styles.symbol}>btc</h4>
              <h4 className={styles.price}>$31.1k</h4>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
