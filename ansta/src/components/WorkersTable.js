import React from 'react'
import TotalPay from './TotalPay'
import PayByDepartment from './PayByDepartment'

export default function WorkersTable(props) {

    const { workers } = props


    return (<div><div className="workersHeader"><div>Imię</div>
        <div>Nazwisko</div>
        <div>Dział </div>
        <div>Wynagrodzenie</div></div>

        {workers.map((worker, index) => {

            return <div key={index} className='workersTable'><div>{worker['imie']}</div>
                <div>{worker['nazwisko']}</div>
                <div>{worker['dzial']}</div>
                <div>{worker['wynagrodzenieKwota']+' '+worker['wynagrodzenieWaluta']}</div>
</div>
        })
        }
        <TotalPay workers={workers}></TotalPay>
        <PayByDepartment workers={workers}></PayByDepartment>
    </div>
    )
}