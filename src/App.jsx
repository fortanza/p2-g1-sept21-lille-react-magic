import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from 'Containers/Home';
import SearchCards from 'Containers/SearchCards/SearchCards';
import CardDescription from 'Containers/CardDescription';
import './App.css';

function App() {
  return (
    <div className="homePage">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cards/:needle" component={SearchCards} />
        <Route path="/Card/" component={CardDescription} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
