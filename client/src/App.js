import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
    
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">

          <Route exact path="/" component={Home} />
          {/* <Route exact path="/product/:id" component={Product} />
          <Route path='*'>
          </Route> */}
      </div>
    </Router>
  );
}

export default App;
