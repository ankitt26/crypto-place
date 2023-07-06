import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../components/HomePage';
import Store from '../redux/Store';

it('homepage test', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <HomePage />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
