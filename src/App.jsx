import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from './Components/Table';
import Form from './Components/Form';
import Stats  from './Components/Stats';
import { useEffect, useState } from 'react';
import { create, destroy, read, edit } from './Storage/localStorage';

const KEY = 'accounts';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createAccount, setCreateAccount] = useState(null);
  const [table, setTable] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);
  const [editAccount, setEditAccount] = useState(null);

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
    destroy(KEY, deleteAccount.id)
    setLastUpdate(Date.now());
  }, [deleteAccount]);

  useEffect(() => {
    if(editAccount === null){
      return;
    }
    console.log(editAccount.id);
    edit(KEY, editAccount)
    setLastUpdate(Date.now());
  }, [editAccount]);

  return (
    <div className="App">
      <header className="App-header">
      <Form setCreateAccount={setCreateAccount}/>
      <Table table={table} setDeleteAccount={setDeleteAccount} setEditAccount={setEditAccount}/>
        {/* <Stats account={account}/>
         */}
      </header>
    </div>
  );
}

export default App;
