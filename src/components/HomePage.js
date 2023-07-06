import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { FetchData } from '../redux/Coins/CoinSlice';
import styles from '../CSS/HomePage.module.css';
import Navbar from './NavBar';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Coins);
  const SearchKey = useSelector((state) => state.Search.searchkey);
  const { CoinList, Loading, Error } = data;

  let finalData = CoinList;

  useEffect(() => {
    if (CoinList.length === 0) {
      dispatch(FetchData());
    }
  }, [CoinList.length, dispatch]);

  if (SearchKey !== '') {
    finalData = CoinList.filter((element) => (
      element.id.includes(SearchKey)
        || element.name.includes(SearchKey)
        || element.symbol.includes(SearchKey)
    ));
  }

  // render on conditions

  const conditions = () => {
    if (Error === true) {
      return (
        <>
          <h1 className={styles.warn}>⚠️</h1>
          <h2 className={styles.errorM}> Something went wrong... </h2>
        </>
      );
    } if (Loading === true) {
      return (
        <span>
          <FaSpinner className={styles.Loading} id={styles.Loading} />
        </span>
      );
    } if (finalData.length === 0) {
      return (
        <h2 className={styles.noMatch}>
          ☹️ No Coins Found!
          {' '}
          <br />
          {' '}
          Search for another coin or try again
          later......
          {' '}
          <br />
        </h2>
      );
    }
    return null;
  };

  // rendering the map data

  const renderCoins = finalData.map((element) => (
    <Link className={styles.card} to={`/coin/${element.id}`} key={element.id}>
      <img className={styles.img} src={element.image} alt="coin" />
      <div className={styles.detail_box}>
        <div className={styles.box1}>
          <h4 className={styles.name}>Coin</h4>
          <h5 className={styles.symbol}>Symbol</h5>
          <h5 className={styles.price}>Current Price</h5>
          <h5 className={styles.change}>24h Change</h5>
        </div>
        <div className={styles.box2}>
          <h4 className={styles.name}>{element.name}</h4>
          <h5 className={styles.symbol}>{element.symbol}</h5>
          <h5 className={styles.price}>
            $
            {element.current_price}
          </h5>
          <h5 className={styles.change}>
            $
            {' '}
            {element.price_change_percentage_24h}
          </h5>
        </div>
      </div>
    </Link>
  ));

  // final return

  return (
    <>
      <Navbar />
      <div>{conditions()}</div>
      <main className={styles.main}>{renderCoins}</main>
    </>
  );
};

export default HomePage;
