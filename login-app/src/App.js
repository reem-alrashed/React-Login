import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>Login page</h1> 
    <form>
      <label >Email</label><br/>
      <input type="email" placeholder="email" name="email"/><br/>
      <label >Password</label><br/>
      <input type="password" placeholder="password" name="password"/><br/>
      <input type="submit"></input>
    </form>

      </header>
    </div>
  );
}

export default App;
