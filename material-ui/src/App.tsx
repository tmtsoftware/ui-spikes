import React, {useState} from 'react';
import './App.css';
import {Drawer, Grid, List, ListItem, Paper} from '@material-ui/core'
import {Header} from "./components/Header";

interface AppProps {
  children: React.ReactNode
}

function App({children}: AppProps) {
  const [showDrawer, openDrawer] = useState<boolean>(false);
  // const useStyles = makeStyles((theme: Theme) =>
  //   createStyles({
  //     paper: {
  //       padding: theme.spacing(2),
  //       textAlign: 'center',
  //       color: theme.palette.text.secondary,
  //       backgroundColor: 'black'
  //     }
  //   }),
  // );
  // const classes = useStyles();
  const MenuList = () => {
    return (
      <List>
        {['OCS Sequencer', 'IRIS Sequencer'].map((text, index) => (
          <ListItem >{text}</ListItem>)
        )}
        {/**
        {['ClearSky','DarkNight'].map(text => {
          return (
            <Menu open={secondLevel === 1 || secondLevel === 0}>
              <ListItem><Link to={'/sequencer'}>{text}</Link></ListItem>
            </Menu>
          )
        })}
        */}
      </List>
    )
  }

  return (
    <div className={"app-root"}>
      <Drawer anchor={'left'} open={showDrawer} onClose={() => openDrawer(false)}>
        <div style={{width: '200px'}}>
          <MenuList/>
        </div>
      </Drawer>
      <Grid container justify={'center'} >
        <Grid item xs={12} >
          <Header openDrawer={openDrawer}/>
        </Grid>
        <Grid style={{margin: '20px'}} container justify={'center'} xs={9}>
            {children}
        </Grid>
        <Grid item xs={12}>
          <Paper
            // className={classes.paper}
          >footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
