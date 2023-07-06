import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import HomePage from './components/HomePage';
import CoinDetail from './components/CoinDetail';

const App = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:coinId/" element={<CoinDetail />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
