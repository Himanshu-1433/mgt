import React , {useState , useEffect} from 'react';
import './App.css';

function App() {
  
  const [check , checking] = useState("hello");
  const [name , Change_name] = useState("hola")
  useEffect(() => {
    // Update the document title using the browser API
    alert(`you are changing ${check}`);
  });
  return (
    <div className="App">
      <h1>{check}</h1>
      {/* hello sujit */}
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
