import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav/MyNav';
import MyFooter from './components/MyFooter/MyFooter';
import Welcome from './components/Welcome/Welcome';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import { useState } from 'react';

function App() {

  const [filter, setFilter] = useState(null)

  return (
    <div className="app-container">
      <MyNav/>
      <Welcome/>

      <input 
        type='text'
        placeholder='filter'
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{margin: '1rem'}}/>

      <AllTheBooks filter={filter}/>

      <div className="footer-container">
        <MyFooter name="Albu Cosmin Andrei" />
      </div>
    </div>
  );
}

export default App;
