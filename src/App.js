// Components
import PageWrapper from './components/PageWrapper';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
// Router
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <PageWrapper>
              <Route
                exact={true}
                path="/"
                component={Home}
              />
              <Route
                exact={true}
                path="/about"
                component={About}
              />
              <Route
                exact={true}
                path="/contact"
                component={Contact}
              />
          </PageWrapper>
        </Router>
      </div>
    </div>
  );
}

export default App;
