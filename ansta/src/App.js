import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import workersjson from './data/workers'
import WorkersTable from './components/WorkersTable'
import PayRange from './components/PayRange'
import DepartmentsFilter from './components/DepartmentsFilter'
import AddWorkerForm from './components/AddWorkerForm'
import { Slider } from '@material-ui/core';

function App() {

  const [workers, setWorkers] = useState(Array.from(workersjson))
  const [nameFilter, setNameFilter] = useState('')
  const [minMaxPay, setMinMaxPay] = useState(getMinMaxPayValue(workers))
  const [depFilter, setDepFilter] = useState({})


  function getMinMaxPayValue(workers) {

    const parsedInitMinMax = [parseFloat(workers[0]['wynagrodzenieKwota']), parseFloat(workers[0]['wynagrodzenieKwota'])]

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

  function handleSliderChange(newValue) {

    setMinMaxPay(newValue)

  }

  function handleDepFilterChange(depList){

    setDepFilter(depList)

  }

  function handleFormSubmit(newWorker) {

    setWorkers([...workers, newWorker])

  }

  function filterWorkers() {

    return workers.filter(worker => {

      return (((worker['imie'] + ' ' + worker['nazwisko'])).toLocaleLowerCase().includes(nameFilter)
       && worker['wynagrodzenieKwota'] >= minMaxPay[0] && worker['wynagrodzenieKwota'] <= minMaxPay[1]
       && depFilter[worker['dzial']] === true)

    })
  }

  function filterWorkersByName() {

    return workers.filter(worker => {

      return (((worker['imie'] + ' ' + worker['nazwisko'])).toLocaleLowerCase().includes(nameFilter))

    })
  }



  return (<>{console.log(workers, minMaxPay)}
    <div><WorkersTable
      workers={filterWorkers()}>
    </WorkersTable></div>
    <br></br>
    <p>Wyszukaj pracownika:</p>
    <input onChange={handleFilterChange} ></input>
    <br></br>
    <p>Filtruj pracowników wg. wynagrodzenia:</p>
    {
      (filterWorkersByName().length < 2) ? <Slider></Slider> :
        <PayRange
          value={minMaxPay}
          minmax={getMinMaxPayValue(filterWorkersByName())}
          payRangeSliderChange={handleSliderChange}></PayRange>}
    <br></br>
    <p>Filtruj pracowników wg. działu:</p>
    <DepartmentsFilter
    workers={workers}
    onDepFilterChange={handleDepFilterChange}
    ></DepartmentsFilter><br></br>
    <div>Dodaj nowego pracownika:</div>
    <AddWorkerForm
    onFormSubmit={handleFormSubmit}
    ></AddWorkerForm>
  </>
  );
}

export default App;
