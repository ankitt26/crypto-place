import { Link, useParams,} from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import styles from "../CSS/CoinDetail.module.css";
const CoinDetail = () => {
  const {coin_id} = useParams();
   console.log(coin_id);
    return (
    <main className={styles.card} >
      <div className={styles.header}>
        <Link to="/" className={styles.back_btn}> {<IoChevronBackSharp/>} </Link>
        <h2 className={styles.coin}>Bitcoin</h2>
      </div>
      <img  className={styles.img} src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"></img>
      <div className={styles.detail_box}>
        <div className={styles.box1}>
          <h3>current_price </h3>
          <h3> market_cap</h3>
          <h3>total_volume</h3>
          <h3>high_24h</h3>
          <h3>low_24h</h3>
          <h3>price_change_24h</h3>
          <h3>price_change_24h</h3>
          <h3>market_cap_change_24h</h3>
          <h3>market_cap_change_24h</h3>
          <h3>price_change_1h</h3>
          <h3> price_change_24h</h3>
          <h3>price_change_7d</h3>
          <h3>last_updated</h3>
        </div>
        <div className={styles.box2}>
          <h3>548 </h3>
          <h3> 51165</h3>
          <h3>156</h3>
          <h3>561</h3>
          <h3>6516</h3>
          <h3>6515</h3>
          <h3>5115</h3>
          <h3>6516</h3>
          <h3>651615</h3>
          <h3>651</h3>
          <h3> 51</h3>
          <h3>51</h3>
          <h3>6511161611</h3>
        </div>
      </div>
    </main>
  );
};

export default CoinDetail;