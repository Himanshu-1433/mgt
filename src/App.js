import React , {useState} from 'react';
import './App.css';

function App() {
  
  const [check , checking] = useState("hello");
  const [name , Change_name] = useState("hola")
  return (
    <div className="App">
      <h1>{check}</h1>
      <button className='btn btn-outline-info' 
      onClick={() => 
      {
        if(check === 'hola')
        {
        checking('hello')
        Change_name('hola')
        }
        else if(check === 'hello'){
          checking('hola')
          Change_name('hello');
        }
      }
    }
    >{name}</button>
    </div>
  );
}

export default App;
