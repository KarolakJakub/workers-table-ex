import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import workersjson from './data/workers'
import WorkersTable from './components/WorkersTable'
import PayRange from './components/PayRange'
import { Slider } from '@material-ui/core';

function App() {

  const [workers, setWorkers] = useState(Array.from(workersjson))
  const [nameFilter, setNameFilter] = useState('')
  const [minMaxPay, setMinMaxPay] = useState(getMinMaxPayValue(workers))

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

  function filterWorkers() {

    return workers.filter(worker => {

      return (((worker['imie'] + ' ' + worker['nazwisko'])).toLocaleLowerCase().includes(nameFilter) && worker['wynagrodzenieKwota'] >= minMaxPay[0] && worker['wynagrodzenieKwota'] <= minMaxPay[1])

    })
  }

  function filterWorkersByName() {

    return workers.filter(worker => {

      return (((worker['imie'] + ' ' + worker['nazwisko'])).toLocaleLowerCase().includes(nameFilter))

    })
  }



  return (<>{console.log(filterWorkersByName())}
    <div><WorkersTable workers={filterWorkers()}></WorkersTable></div>
    <br></br>
    <p>Wyszukaj pracownika:</p>
    <input onChange={handleFilterChange} ></input>
    <br></br>
    <p>Filtruj pracowników wg. wynagrodzenia:</p>
    {
      (filterWorkersByName().length < 2) ? <Slider></Slider> :
        <PayRange
          minmax={getMinMaxPayValue(filterWorkersByName())}
          payRangeSliderChange={setMinMaxPay}></PayRange>}
  </>
  );
}

export default App;
