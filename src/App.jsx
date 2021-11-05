import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from 'Containers/Home';
import SearchCards from 'Containers/SearchCards/SearchCards';
import './App.css';

function App() {
  return (
    <div className="homePage">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SearchCards/:needle" component={SearchCards} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
