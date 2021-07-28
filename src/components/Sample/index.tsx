import { Redirect, Route, Switch } from 'react-router-dom';

import { SAMPLE_ROUTES } from '~/constants/path';
import TodoMain from './TodoMain';
import SampleMain from './SampleMain';

const SampleRoute = () => (
  <Switch>
    <Route exact path={SAMPLE_ROUTES.ROOT} component={SampleMain} />
    <Route path={SAMPLE_ROUTES.TODO_LIST} component={TodoMain} />
    <Redirect to={SAMPLE_ROUTES.ROOT} />
  </Switch>
);

export default SampleRoute;
