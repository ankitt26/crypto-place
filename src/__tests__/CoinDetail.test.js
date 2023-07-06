import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CoinDetail from '../components/CoinDetail';
import Store from '../redux/Store';

it('coindetail test', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <CoinDetail />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
