import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import Store from '../redux/Store';

it('App test', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <App />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
