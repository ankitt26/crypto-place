import { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { useDispatch } from 'react-redux';
import styles from "../CSS/NavBar.module.css";
import { setSearchKey } from '../redux/Coins/SearchSlice';

const Navbar = () => {
const dispatch = useDispatch();
  const [ input, setinput ] = useState('');

  const onchange = (event)=> {
    setinput(event.target.value)
    event.preventDefault();
  }

  const onsubmit = (event) => {
    dispatch(setSearchKey(input));
    event.preventDefault();
    console.log(input)
    setinput('');

  };
  return (
    <nav className={styles.nav}>
      <h2 className={styles.h2}>CryptoPlace</h2>
      <form className={styles.form} onSubmit={onsubmit}>
        <input className={styles.input} placeholder="   search" value={input} onChange={onchange}></input>
        <button type="submit" className={styles.btn}>
          <ImSearch className={styles.search} />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
