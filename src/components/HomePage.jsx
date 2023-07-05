import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import styles from "../CSS/HomePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../redux/Coins/CoinSlice";
const HomePage = () => {
  let coin_id = "bitcoin";

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.Coins);
  const { CoinList, Loading, Error } = data;
  // console.log(CoinList);
  useEffect(() => {
    if(CoinList.length === 0){
        dispatch(FetchData());
    }
    // console.log('fetchdata');
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Link className={styles.card} to={`/coin/${coin_id}`}>
          <img
            className={styles.img}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          ></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h4 className={styles.name}>Coin</h4>
              <h5 className={styles.symbol}>Symbol</h5>
              <h5 className={styles.price}>Current Price</h5>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h4 className={styles.name}>Bitcoin</h4>
              <h5 className={styles.symbol}>btc</h5>
              <h5 className={styles.price}>$31.1k</h5>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </Link>
        <Link className={styles.card} to={`/coin/${coin_id}`}>
          <img
            className={styles.img}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          ></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h4 className={styles.name}>Coin</h4>
              <h5 className={styles.symbol}>Symbol</h5>
              <h5 className={styles.price}>Current Price</h5>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h4 className={styles.name}>Bitcoin</h4>
              <h5 className={styles.symbol}>btc</h5>
              <h5 className={styles.price}>$31.1k</h5>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </Link>
        <Link className={styles.card} to={`/coin/${coin_id}`}>
          <img
            className={styles.img}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          ></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h4 className={styles.name}>Coin</h4>
              <h5 className={styles.symbol}>Symbol</h5>
              <h5 className={styles.price}>Current Price</h5>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h4 className={styles.name}>Bitcoin</h4>
              <h5 className={styles.symbol}>btc</h5>
              <h5 className={styles.price}>$31.1k</h5>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </Link>
        <Link className={styles.card} to={`/coin/${coin_id}`}>
          <img
            className={styles.img}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          ></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h4 className={styles.name}>Coin</h4>
              <h5 className={styles.symbol}>Symbol</h5>
              <h5 className={styles.price}>Current Price</h5>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h4 className={styles.name}>Bitcoin</h4>
              <h5 className={styles.symbol}>btc</h5>
              <h5 className={styles.price}>$31.1k</h5>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </Link>{" "}
        <Link className={styles.card} to={`/coin/${coin_id}`}>
          <img
            className={styles.img}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          ></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h4 className={styles.name}>Coin</h4>
              <h5 className={styles.symbol}>Symbol</h5>
              <h5 className={styles.price}>Current Price</h5>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h4 className={styles.name}>Bitcoin</h4>
              <h5 className={styles.symbol}>btc</h5>
              <h5 className={styles.price}>$31.1k</h5>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </Link>{" "}
        <Link className={styles.card} to={`/coin/${coin_id}`}>
          <img
            className={styles.img}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          ></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h4 className={styles.name}>Coin</h4>
              <h5 className={styles.symbol}>Symbol</h5>
              <h5 className={styles.price}>Current Price</h5>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h4 className={styles.name}>Bitcoin</h4>
              <h5 className={styles.symbol}>btc</h5>
              <h5 className={styles.price}>$31.1k</h5>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </Link>{" "}
        <Link className={styles.card} to={`/coin/${coin_id}`}>
          <img
            className={styles.img}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          ></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h4 className={styles.name}>Coin</h4>
              <h5 className={styles.symbol}>Symbol</h5>
              <h5 className={styles.price}>Current Price</h5>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h4 className={styles.name}>Bitcoin</h4>
              <h5 className={styles.symbol}>btc</h5>
              <h5 className={styles.price}>$31.1k</h5>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </Link>{" "}
        <Link className={styles.card} to={`/coin/${coin_id}`}>
          <img
            className={styles.img}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          ></img>
          <div className={styles.detail_box}>
            <div className={styles.box1}>
              <h4 className={styles.name}>Coin</h4>
              <h5 className={styles.symbol}>Symbol</h5>
              <h5 className={styles.price}>Current Price</h5>
              <h5 className={styles.change}>24h Change</h5>
            </div>
            <div className={styles.box2}>
              <h4 className={styles.name}>Bitcoin</h4>
              <h5 className={styles.symbol}>btc</h5>
              <h5 className={styles.price}>$31.1k</h5>
              <h5 className={styles.change}>1.3%</h5>
            </div>
          </div>
        </Link>
      </main>
    </>
  );
};

export default HomePage;
