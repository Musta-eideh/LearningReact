import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';


function App() {

  // O Router envolve toda a aplicação
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link> 
      </li>
      <li>
        <Link to="/empresa">Empresa</Link> 
      </li>
      <li>
        <Link to="/contato">Contato</Link> 
      </li>
    </ul>

    {/* A parte do Switch é onde substitui o componente da página */}

    {/* O route efetua o roteamento, a rota "/" que pertence ao componente tal... */}

    <Routes>
      <Route path="/" element={Home}>
        <Home />
      </Route>
      <Route path="/contato">
        <Contato />
      </Route>
      <Route path="/empresa">
        <Empresa />
      </Route>
    </Routes>
  </Router>
}

export default App;
