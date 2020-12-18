import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Routes } from './routes/Routes';
import { HashRouter as Router } from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(0,0,0)',
    },
    secondary: {
      main: 'rgb(98,106,97)',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
      <App>
        <Routes />
      </App>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);


// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
