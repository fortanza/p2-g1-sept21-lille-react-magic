import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from 'Containers/Home';
import SearchCards from 'Containers/SearchCards/SearchCards';
import CardDescription from 'Containers/CardDescription';
import FilterOption from 'Containers/FilterOption';
import SearchCardsAdvanced from 'Containers/SearchCards/SearchCardsAdvanced';
import './App.css';

function App() {
  return (
    <div
      className="homePage"
      style={{ backgroundImage: 'url(assets/img/backmg.jpg)' }}
    >
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/searchCards/:needle" component={SearchCards} />
        <Route path="/card" component={CardDescription} />
        <Route
          path="/CardDescription/:multiverseid"
          component={CardDescription}
        />
        <Route path="/filter" component={FilterOption} />
        <Route
          path="/SearchCardsAdvanced/:needleName/:needlePower/:needleColor/:needleRarity/:needleSet"
          component={SearchCardsAdvanced}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
