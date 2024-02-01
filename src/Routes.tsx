import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import SearchApi from 'pages/SearchApi';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gitsearch">
        <SearchApi />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
