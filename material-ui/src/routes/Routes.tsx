import React from 'react';
import {CustomList} from '../components/CustomList';
import {Route, Switch} from 'react-router-dom';
import {Divider, TextField} from "@material-ui/core";
import Modals from "../components/Modals";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/config">
        <div>
          <TextField
            style={{margin: '5px'}}
            id="datetime"
            label="select date"
            type="date"
            defaultValue="2017-05-24T10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Divider variant={'fullWidth'}/>
          <div>
            No Calendar component yet
          </div>
        </div>
      </Route>
      <Route path="/Sequencer">
        <CustomList/>
      </Route>
      <Route path="/Apps">
        <Modals/>
      </Route>

      <Route path="/" exact={true}>
        {/*<Calender/>*/}
      </Route>
    </Switch>
  );
};
