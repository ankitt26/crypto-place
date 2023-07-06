import { Link, useParams } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import styles from '../CSS/CoinDetail.module.css';

const CoinDetail = () => {
  const { coinId } = useParams();
  const coindata = useSelector((state) => state.Coins.CoinList);
  const coinInfo = coindata.filter((element) => element.id === coinId);

  const renderCoinInfo = coinInfo.map((element) => (
    <main className={styles.card} key={element.id}>
      <Link to="/" className={styles.back_btn}>
        <IoChevronBackSharp />
      </Link>
      <div className={styles.header}>
        <h2 className={styles.coin}>{element.name}</h2>
      </div>
      <img className={styles.img} src={element.image} alt={element.name} />
      <table className={styles.detail_table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th1}>Data</th>
            <th className={styles.th2}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td1}>Current Price</td>
            <td className={styles.td2}>
              $
              {element.current_price}
            </td>
          </tr>
          <tr>
            <td className={styles.td1}>Market Rank</td>
            <td className={styles.td2}>{element.market_cap_rank}</td>
          </tr>
          <tr>
            <td className={styles.td1}>Total Volume</td>
            <td className={styles.td2}>
              $
              {element.total_volume}
            </td>
          </tr>
          <tr>
            <td className={styles.td1}>High 24h</td>
            <td className={styles.td2}>
              $
              {element.high_24h}
            </td>
          </tr>
          <tr>
            <td className={styles.td1}>Low 24h</td>
            <td className={styles.td2}>
              $
              {element.low_24h}
            </td>
          </tr>
          <tr>
            <td className={styles.td1}>Price Change 24h</td>
            <td className={styles.td2}>
              $
              {element.price_change_24h}
            </td>
          </tr>
          <tr>
            <td className={styles.td1}>Price Change Percentage 24h</td>
            <td className={styles.td2}>
              {' '}
              {element.price_change_percentage_24h}
              {' '}
              %
            </td>
          </tr>
          <tr>
            <td className={styles.td1}>Market Cap Change 24h</td>
            <td className={styles.td2}>
              $
              {element.market_cap_change_24h}
            </td>
          </tr>
          <tr>
            <td className={styles.td1}>Market Cap Change Percentage 24h</td>
            <td className={styles.td2}>
              {' '}
              {element.market_cap_change_percentage_24h}
              {' '}
              %
            </td>
          </tr>
          <tr>
            <td className={styles.td1}>Last Updated</td>
            <td className={styles.td2}>
              {' '}
              {element.last_updated}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  ));

  return <>{renderCoinInfo}</>;
};

export default CoinDetail;
