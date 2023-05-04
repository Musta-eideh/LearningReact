import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyname from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <Frase />
      <HelloWorld />
      <SayMyname 
        nome="Mustafa"
      />
      <Pessoa 
      nome="Mustafa"
      idade={20}
      profissao="Programador"
      foto="https://via.placeholder.com/150"
    />
    <List />
    </div>
  );
}

export default App;
