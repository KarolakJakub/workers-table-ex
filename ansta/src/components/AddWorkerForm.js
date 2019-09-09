import React, { useEffect, useState } from 'react'

export default function AddWorkerForm(props) {

    const { onFormSubmit } = props

    const [newWorker, setNewWorker] = useState({
        imie: "",
        nazwisko: "",
        dzial: "",
        wynagrodzenieKwota: "",
        wynagrodzenieWaluta: "PLN"
    })

    function handleFormChange(event) {

        setNewWorker({ ...newWorker, [event.target.name]: event.target.value })

    }

    function handleFormSubmit(event) {

        event.preventDefault()
        onFormSubmit(newWorker)
        setNewWorker({
            imie: "",
            nazwisko: "",
            dzial: "",
            wynagrodzenieKwota: "",
            wynagrodzenieWaluta: "PLN"
        })

    }


    return (<>
        {console.log(newWorker)}
        <form onSubmit={handleFormSubmit}>
            <p>
                <label htmlFor="imie">Imię</label>
                <input
                    required
                    type='text'
                    name="imie"
                    value={newWorker['imie']}
                    onChange={handleFormChange}></input>
            </p>
            <p>
                <label htmlFor="nazwisko">Nazwisko</label>
                <input
                    required
                    name="nazwisko"
                    type='text'
                    value={newWorker['nazwisko']}
                    onChange={handleFormChange}></input>
            </p>
            <p>
                <label htmlFor="dzial">Dział</label>
                <input
                    required
                    name="dzial"
                    type='text'
                    value={newWorker['dzial']}
                    onChange={handleFormChange}></input>
            </p>
            <p>
                <label htmlFor="wynagrodzenieKwota">Wynagrodzenie</label>
                <input
                    required
                    name="wynagrodzenieKwota"
                    type='number'
                    value={newWorker['wynagrodzenieKwota']}
                    onChange={handleFormChange}></input>
            </p>

            <button>Dodaj</button>
        </form>
    </>
    )
}