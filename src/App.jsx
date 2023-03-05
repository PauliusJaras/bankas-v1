import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from './Components/Table';
import Form from './Components/Form';
import Stats  from './Components/Stats';
import { useState } from 'react';

function App() {

  const [account, setAccount] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Stats account={account}/>
        <Form setAccount={setAccount}/>
        <Table account={account}/>
      </header>
    </div>
  );
}

export default App;
