import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import './App.css';

function App() {
  <Header />;
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>;
  <Footer />;
}

export default App;
