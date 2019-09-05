import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import workersjson from './data/workers'
import WorkersTable from './components/WorkersTable'

function App() {

  const [workers, setWorkers] = useState(Array.from(workersjson))
  const [nameFilter, setNameFilter] = useState('')

  // const newWorkers = Object.values(JSON.stringify(workersjson))


  // setWorkers(newWorkers)

  function handleFilterChange(event) {

    setNameFilter(event.target.value)
  }

  function filterWorkers() {
    console.log(nameFilter)
    return workers.filter( worker => {
     
      console.log((worker['imie']+' '+worker['nazwisko']).toString())
      return ((worker['imie']+' '+worker['nazwisko']).toString()).includes(nameFilter)

      // return (/nameFilter/gm).exec(worker['imie']+' '+worker['nazwisko'])
    })
  }

  console.log(filterWorkers())

  return (<>{console.log(nameFilter, workers)}
    <div><WorkersTable workers={filterWorkers()}></WorkersTable></div>
    <input onChange={handleFilterChange} ></input>
    </>
  );
}

export default App;
