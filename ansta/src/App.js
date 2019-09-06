import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import workersjson from './data/workers'
import WorkersTable from './components/WorkersTable'
import PayRange from './components/PayRange'

function App() {

  const [workers, setWorkers] = useState(Array.from(workersjson))
  const [nameFilter, setNameFilter] = useState('')
  const [minMaxPay, setSetMinMaxPay] = useState(getMinMaxPayValue(workers))

  function getMinMaxPayValue(workers) {

    const parsedInitMinMax = [parseFloat(workers[0]['wynagrodzenieKwota']), parseFloat(workers[1]['wynagrodzenieKwota'])]

    return workers.reduce((acc, worker) => {

      const parsedWorkerPay = parseFloat(worker['wynagrodzenieKwota'])

      if (parsedWorkerPay < acc[0]) {
        return acc = [parsedWorkerPay, acc[1]]

      } if (parsedWorkerPay > acc[1]) {
        return acc = [acc[0], parsedWorkerPay]
      }
      return acc
    }, parsedInitMinMax)

  }

  function handleFilterChange(event) {

    setNameFilter(event.target.value)
  }

  function payRangeSliderChange(newValue) {
    setSetMinMaxPay(newValue)
  }

  function filterWorkers() {

    return workers.filter(worker => {

      return (((worker['imie'] + ' ' + worker['nazwisko'])).toLocaleLowerCase().includes(nameFilter) && worker['wynagrodzenieKwota'] >= minMaxPay[0] && worker['wynagrodzenieKwota'] <= minMaxPay[1])

    })
  }

  

  return (<>
    <div><WorkersTable workers={filterWorkers()}></WorkersTable></div>
    <br></br>
    <p>Wyszukaj pracownika:</p>
    <input onChange={handleFilterChange} ></input>
    <br></br>
    <p>Filtruj pracowników wg. wynagrodzenia:</p>
    <PayRange
      minmax={getMinMaxPayValue(workers)}
      payRangeSliderChange = { setSetMinMaxPay }></PayRange>
  </>
  );
}

export default App;
