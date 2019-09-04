import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import workersjson from './data/workers'
import WorkersTable from './components/WorkersTable'

function App() {

  const [workers, setWorkers] = useState(Array.from(workersjson))
  // const newWorkers = Object.values(JSON.stringify(workersjson))


  // setWorkers(newWorkers)

  console.log(workers)

  return (
    <div><WorkersTable workers={workers}></WorkersTable></div>
  );
}

export default App;
