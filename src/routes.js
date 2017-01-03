import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import DepotPlan from './containers/DepotPlanPage';
import DailyPlan from './containers/DailyPlanPage';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={DailyPlan}/>
      <Route path="daily-plan" component={DailyPlan}/>
      <Route path="depot-plan" component={DepotPlan}/>
    </Route>
  </Route>
);
