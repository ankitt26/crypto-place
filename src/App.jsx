import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import HomePage from "./components/HomePage.jsx";
import CoinDetail from "./components/CoinDetail";
const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:coin_id/" element={<CoinDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
