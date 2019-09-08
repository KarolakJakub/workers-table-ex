import React, { useEffect, useState } from 'react'

export default function PayByDepartment(props) {

    const { workers } = props

    const [pay, setPay] = useState({})

    useEffect(() => {
        setPay(reducedDepPay)
    }, [workers])

    const workersToDepPay = workers.map((worker) => {

        const workersDepartment = worker['dzial']

        return { [workersDepartment]: worker['wynagrodzenieKwota'] }

    })

    const reducedDepPay = workersToDepPay.reduce((acc, pay) => {


        if (acc[Object.keys(pay)[0]] === undefined) {

            return { ...acc, [Object.keys(pay)[0]]: parseFloat(Object.values(pay)) }

        } else {

            return { ...acc, [Object.keys(pay)[0]]: parseFloat(acc[Object.keys(pay)[0]]) + parseFloat(Object.values(pay)) }
        }


    }, {})

    return (<><br></br>
        Suma zarobków wg. departamentu: <div>{Object.keys(pay).map((department, index) => {
            return (<div key={index}>{department + ' ' + pay[department] + ' PLN'}</div>)
        }
        )}</div>
    </>
    )
}