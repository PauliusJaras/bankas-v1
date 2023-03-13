import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Table from './Components/Table';
import Form from './Components/Form';
import Stats  from './Components/Stats';
import { useEffect, useState } from 'react';
import Messages from './Components/Messages';
import axios from 'axios'

//const KEY = 'accounts';
const URL = 'http://localhost:3003/accounts'

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createAccount, setCreateAccount] = useState(null);
  const [table, setTable] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);
  const [editAccount, setEditAccount] = useState(null);
  const [messages, setMessages] = useState(null);
  const [sortData, setSortData] = useState(null);

  useEffect(() => {
    axios.get(URL).then(res => setTable(res.data));

  }, [lastUpdate]);

  useEffect(() => {
    if(createAccount === null){
      return;
    }

    axios.post(URL, createAccount)
    .then(res => {
      setLastUpdate(Date.now());
      msg(res.data.message.text, res.data.message.type);
    })    
  }, [createAccount])

  useEffect(() => {
    if(deleteAccount === null){
      return;
    }
    axios.delete(URL + '/' + deleteAccount.id)
    .then(res => {
      setLastUpdate(Date.now());
      msg(res.data.message.text, res.data.message.type);
    })
  }, [deleteAccount]);

  useEffect(() => {
    if(editAccount === null){
      return;
    }
    axios.put(URL + '/' + editAccount.id, editAccount)
    .then(res => {
      setLastUpdate(Date.now());
      msg(res.data.message.text, res.data.message.type);
    })
  }, [editAccount]);

  useEffect(() => {
    if(table === null || sortData === null){
      return;
    }
    const newData = [...table]
    const sortedData = newData.sort((a, b) => {
    if(a[sortData] < b[sortData]) { return 1; }
    if(a[sortData] > b[sortData]) { return -1; }
    return 0;
    })
    setTable(sortedData);
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
      <Table table={table} setDeleteAccount={setDeleteAccount} setEditAccount={setEditAccount} setSortData={setSortData}/>
      {
      messages && <Messages messages={messages}/>
      }
      </header>
    </div>
  );
}

export default App;
