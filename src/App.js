import React, { Component } from 'react';
import Tabbar from './components/tabbar/index.jsx'
import { HashRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './components/home/index.jsx'
import My from './components/my/index.jsx'
import Map from './components/map/index.jsx'
import Discovery  from "./components/discovery/index.jsx";
import Not  from "./components/notfound/index.jsx";

class App extends Component {
  render() {
    return (
      <Router basename={'metro'}>
          <div className="App">
              <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/my'} component={My} />
                <Route exact path={'/map'} component={Map} />
                <Route exact path={'/discovery'} component={Discovery} />
                <Route component={Not}/>
              </Switch>
              <Tabbar/>
          </div>
     </Router>
    );
  }
}

export default App;
