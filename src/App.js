import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute path='/booking'>
                <Booking></Booking>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
