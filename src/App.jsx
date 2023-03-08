import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Table from './Components/Table';
import Form from './Components/Form';
import Stats  from './Components/Stats';
import { useEffect, useState } from 'react';
import { create, destroy, read, edit, sort } from './Storage/localStorage';
import Messages from './Components/Messages';

const KEY = 'accounts';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createAccount, setCreateAccount] = useState(null);
  const [table, setTable] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);
  const [editAccount, setEditAccount] = useState(null);
  const [filterAccount, setFilterAccount] = useState(null);
  const [messages, setMessages] = useState(null);
  const [sortData, setSortData] = useState(null);

  useEffect(() => {
    setTable(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if(createAccount === null){
      return;
    }
    create(KEY, createAccount);
    setLastUpdate(Date.now());
    msg(`${createAccount.name} ${createAccount.surname} added to the account list`, 'success');
  }, [createAccount])

  useEffect(() => {
    if(deleteAccount === null){
      return;
    }
    destroy(KEY, deleteAccount.id)
    setLastUpdate(Date.now());
    msg(`Account ${deleteAccount.id} deleted`, 'danger');
  }, [deleteAccount]);

  useEffect(() => {
    if(editAccount === null){
      return;
    }
    edit(KEY, editAccount)
    setLastUpdate(Date.now());
    msg(`${editAccount.name} ${editAccount.surname} account updated`, 'update')
  }, [editAccount]);

  useEffect(() => {
    if(filterAccount === null){
      return;
    }
    for(let i=0; i < filterAccount.length; i++) {edit(KEY, filterAccount[i])};
    setLastUpdate(Date.now());
    msg('Accounts filtered', 'ok')
  }, [filterAccount]);

  useEffect(() => {
    if(sortData === null){
      return;
    }
    sort(KEY, sortData);
    setLastUpdate(Date.now());
    msg('Accounts sorted by: '+ sortData, 'ok');
  }, [sortData])

  const msg = (text, type) => {
    const randID = crypto.randomUUID();
    setMessages(m => [...m ?? [], {text, type, id: randID}]);
    setTimeout(() => {
      setMessages(m => m.filter(f => f.id !== randID));
    }, 5000)
  }

  return (
    <div className="App">
      <header className="App-header">
      <Stats table={table}/>
      <Form setCreateAccount={setCreateAccount}/>
      <Table table={table} setDeleteAccount={setDeleteAccount} setEditAccount={setEditAccount} setFilterAccount={setFilterAccount} setSortData={setSortData}/>
      {
      messages && <Messages messages={messages}/>
      }
      </header>
    </div>
  );
}

export default App;
