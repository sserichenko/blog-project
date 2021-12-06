import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from "./components/Create"
import BlogDetail from './components/BlogDetail'
import NotFound from './components/NotFound'
function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/blogs/:id" component={BlogDetail} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
