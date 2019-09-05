import React from 'react'
import Worker from './Worker'
import TotalPay from './TotalPay'
import PayByDepartment from './PayByDepartment'

export default function WorkersTable(props) {

    const { workers } = props


    return (<>Imie  nazwisko  dzial wynagrodzenie
        {workers.map((worker, index) => {

        return <Worker
            worker={worker}
            key={index}
        ></Worker>
    })
        }
        <TotalPay workers={workers}></TotalPay>
        <PayByDepartment workers={workers}></PayByDepartment>
    </>
    )
}