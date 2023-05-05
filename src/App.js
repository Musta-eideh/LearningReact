import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'


function App() {
  return (
    // O Router envolve toda a aplicação
    <Router>
      <Navbar />
      {/* A parte do Switch é onde substitui o componente da página */}

      {/* O route efetua o roteamento, a rota "/" que pertence ao componente tal... */}

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;