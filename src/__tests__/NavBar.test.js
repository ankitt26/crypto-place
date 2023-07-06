import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';
import Store from '../redux/Store';

it('Navbar test', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <NavBar />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
