import React, { Suspense } from 'react';
import { EditableTable } from './components/TableComponent';
import { Modals } from './components/Modals';
import { Apps } from './components/Navigation';
import { TodoList } from './components/TodoList';
import { Route, Switch } from 'react-router-dom';

const Sequencer = React.lazy(() => import('./pages/Sequencer'));
const Ocs = React.lazy(() => import('./pages/Ocs'));

export const Routes = () => {
  return (
    <Switch>
      <Route path="/Apps/1">
        <EditableTable />
      </Route>
      <Route path="/Apps/2/Sequencers">
        <TodoList />
      </Route>
      <Route
        path={[
          '/Apps/2/Iris/DarkNight',
          '/Apps/2/Iris/ClearSky',
          '/Apps/2/OCS/ClearSky',
          '/Apps/2/OCS/DarkNight',
        ]}
      >
        <Modals />
      </Route>
      <Route path="/Apps">
        <Apps />
      </Route>
      <Route path="/Ocs">
        <Suspense fallback={() => <div>Loading...</div>}>
          <Ocs />
        </Suspense>
      </Route>
      <Route path="/Sequencer">
        <Suspense fallback={() => <div>Loading...</div>}>
          <Sequencer />
        </Suspense>
      </Route>
    </Switch>
  );
};
