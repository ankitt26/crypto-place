import "./App.css";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import HomePage from "./components/HomePage.jsx";
import CoinDetail from "./components/CoinDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin_detail" element={<CoinDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
