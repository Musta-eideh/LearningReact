import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = "Mustafa";
  const newName = name.toLocaleUpperCase();
  
  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <p>Olá, {name}!!</p>
      <HelloWorld />
    </div>
  );
}

export default App;
