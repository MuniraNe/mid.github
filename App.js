import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App..';
import 'bootstrap/dist/css/bootstrap.min.css'

import NewShop from './components/NewShop.Components';
import NewPruduct from './components/NewPruduct.Components';



function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">Todo </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"Application data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="navbar-brand" to="/">Home</Link>
             </li>
             <li class="nav-item active">
              <Link class="navbar-brand" to="/add">NewShop</Link>
             </li>
             <li class="nav-item active">
              <Link class="navbar-brand" to="/add">NewPruduct</Link>
             </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' Component={NewShop} />
        <Route path='/New pruduct/:id' Component={NewPruduct} />
      </Routes>
    </Router>
  );
}

export default App;
