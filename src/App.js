// https://reactrouter.com/web/guides/quick-start
// https://pt-br.reactjs.org/docs/rendering-elements.html
// https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c


import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

const useStyles = makeStyles({
  app: {
    backgroundColor: '#171717'
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={Theme()}>
      <div className="App" className={classes.app}>
          <Router>
            <Switch>
              <Route path='/'>
                {userIsAuthenticated() ? <Home></Home> : <Login></Login>}
              </Route>
            </Switch>
          </Router>        
      </div>
    </ThemeProvider>
  );
}

function userIsAuthenticated() {
  return localStorage.getItem('token');
}

export default App;
