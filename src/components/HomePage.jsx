import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import styles from "../CSS/HomePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../redux/Coins/CoinSlice";


const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Coins);
  const SearchKey = useSelector((state) => state.Search.searchkey);
  console.log(SearchKey);
  const { CoinList, Loading, Error } = data;

  let finalData = CoinList;

  if (SearchKey !== "") {
    finalData = CoinList.filter((element) => {
      return element.id.includes(SearchKey) || element.name.includes(SearchKey);
    });

    if (finalData.length === 0) {
      console.log("no matched");
    }
  }

 

  useEffect(() => {
    if (CoinList.length === 0) {
      dispatch(FetchData());
    }
  }, [dispatch]);

  const renderCoins = finalData.map((element) => {
    return (
      <Link className={styles.card} to={`/coin/${element.id}`} key={element.id}>
        <img className={styles.img} src={element.image}></img>
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
            <h5 className={styles.price}>{element.current_price}</h5>
            <h5 className={styles.change}>
              {element.price_change_percentage_24h}
            </h5>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Navbar />
     
      <main className={styles.main}>{renderCoins}</main>
    </>
  );
};

export default HomePage;
