import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from '../store';
import { history } from '../store/rootReducer';
import Layout from './common/Layout';

const App = () => (
  <>
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </ReduxProvider>
  </>
);

export default App;
