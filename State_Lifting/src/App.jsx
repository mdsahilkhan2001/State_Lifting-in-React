import { useState } from 'react';
import './App.css';
import Card from './assets/components/Card';
 

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <div><Card title="Card1" name={name} setName={setName} /></div>
      <div><Card title="Card2" name={name} setName={setName} /></div>
      
      {/* <p>I am inside parent component and the value of name is {name}</p> */}
    </>
  );
}

export default App;
