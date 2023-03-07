import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from './Components/Table';
import Form from './Components/Form';
import Stats  from './Components/Stats';
import { useEffect, useState } from 'react';
import { create, destroy, read } from './Storage/localStorage';

const KEY = 'accounts';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createAccount, setCreateAccount] = useState(null);
  const [table, setTable] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);

  useEffect(() => {
    setTable(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if(createAccount === null){
      return;
    }
    create(KEY, createAccount);
    setLastUpdate(Date.now());
  }, [createAccount])

  useEffect(() => {
    if(deleteAccount === null){
      return;
    }
    console.log(deleteAccount.id);
    destroy(KEY, deleteAccount.id)
    setLastUpdate(Date.now());
  }, [deleteAccount]);

  return (
    <div className="App">
      <header className="App-header">
      <Form setCreateAccount={setCreateAccount}/>
      <Table table={table} setDeleteAccount={setDeleteAccount}/>
        {/* <Stats account={account}/>
         */}
      </header>
    </div>
  );
}

export default App;
