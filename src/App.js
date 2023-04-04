import { useState } from 'react'
import './App.css';
import ClassCounter from './component/ClassCounter';
import FunctionCounter from './component/FunctionCounter';


function App() {

  return (
     <div class="AllCounters">

      <ClassCounter />
      <hr></hr>
      <FunctionCounter />

    </div>
  )
}


export default App;
