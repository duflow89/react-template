import { Redirect, Route, Switch } from 'react-router-dom';

import { SAMPLE_ROUTES } from '~/constants/path';
import TodoMain from './TodoMain';
import SampleMain from './SampleMain';

const SampleRoute = () => (
  <Switch>
    <Route exact path={SAMPLE_ROUTES.ROOT} component={SampleMain} />
    <Route path={SAMPLE_ROUTES.TODO_LIST} component={TodoMain} />
    <Route path={SAMPLE_ROUTES.SUB_PAGE1} component={TodoMain} />
    <Route path={SAMPLE_ROUTES.SUB_PAGE2} component={TodoMain} />
    <Redirect to={SAMPLE_ROUTES.ROOT} />
  </Switch>
);

export default SampleRoute;
