import { Route, Switch } from 'react-router-dom';
import { ROOT } from '~/constants/path';
import SampleRoute from '../Sample';
import Main from '../Main';
import Header from './header';

const Layout = () => (
  <div className='wrap'>
    <Header />
    <div className='container'>
      <Switch>
        <Route exact path={ROOT.ROOT} component={Main} />
        <Route path={ROOT.SAMPLE} component={SampleRoute} />
      </Switch>
    </div>
  </div>
);

export default Layout;
