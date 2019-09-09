import React from 'react'
import Worker from './Worker'
import TotalPay from './TotalPay'
import PayByDepartment from './PayByDepartment'

export default function WorkersTable(props) {

    const { workers } = props


    return (<div><div className="workersHeader"><div>Imie</div>
        <div>Nazwisko</div>
        <div>Dzial </div>
        <div>Wynagrodzenie</div>
        <div>Waluta</div></div>

        {workers.map((worker, index) => {

            return <div className='workersTable'><div>{worker['imie']}</div>
                <div>{worker['nazwisko']}</div>
                <div>{worker['dzial']}</div>
                <div>{worker['wynagrodzenieKwota']}</div>
                <div>{worker['wynagrodzenieWaluta']}</div></div>
        })
        }
        <TotalPay workers={workers}></TotalPay>
        <PayByDepartment workers={workers}></PayByDepartment>
    </div>
    )
}