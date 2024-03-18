import logo from './logo.svg';
import './App.css';
import FormCom from './components/form';
import ListCom from './components/list';
import LIstClass from './components/listClass'
import { useState } from 'react';
function App() {
  const [inputVal, setInputVal] = useState('')
  const [listData, setList] = useState([])
  const [itemId, setItemId] = useState(0)
  const inputsSubmit = (val) => {
    if (!val) return
    setItemId(val => val + 1)
    setList([
      ...listData,
      {
        text: val,
        id: itemId
      }
    ])
  }
  const delItem = (id) => {
    const index = listData.findIndex(item => item.id === id)
    console.log('删除', index)
    setList(list => list.filter(item => item.id !== id))
  }
  return (
    <div className="App">
      <FormCom inputVal={inputVal} submit={inputsSubmit} />
      <ListCom list={listData} delItem={delItem}></ListCom>
      <LIstClass/>
    </div>
  );
}

export default App;
