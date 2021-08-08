// https://reactrouter.com/web/guides/quick-start
// https://pt-br.reactjs.org/docs/rendering-elements.html
// https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c

import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import Footer from './Components/Footer'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import Theme from './Theme'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

const useStyles = makeStyles({
  app: {
    backgroundColor: '#171717',
    color: '#cac4c4'
  },
  body: {
    height: '93vh'
  }
});

function App() {
  const classes = useStyles();

  function onLogin(history) {
    console.log('logged in')
    history.push('/')
  }

  return (
    <ThemeProvider theme={Theme()}>
      <div className="App" className={classes.app}>
          <Grid container className={classes.body}>
            <Router>
              <Switch>
                <Route path='/' render={({history}) => (
                  userIsAuthenticated() ? <Home></Home> : <Login onLogin={() => onLogin(history)}></Login>
                )} />
              </Switch>  
            </Router>
          </Grid>
          
          <Footer height='7vh'></Footer>
      </div>
    </ThemeProvider>
  );
}

function userIsAuthenticated() {
  return localStorage.getItem('token');
}

export default App;
