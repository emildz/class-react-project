import './App.css';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
   
  return (
    <div className="App">
      <header className="App-header">
        <h1>{loggedIn ? 'Welcome Back' : 'Please Login'}</h1>
      
      {
        loggedIn 
          ? <button onClick={() => setLoggedIn(false)}>Logout</button>
          : <button onClick={() => setLoggedIn(true)} > Login </button>
      }
      </header>
    </div>
  );
}

export default App;
