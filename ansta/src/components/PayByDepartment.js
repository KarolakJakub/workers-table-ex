import React, { useEffect, useState } from 'react'

export default function PayByDepartment(props) {

    const { workers } = props

    const [pay, setPay] = useState({})

    useEffect(() => {

        const workersToDepPay = workers.map((worker) => {

            const workersDepartment = worker['dzial']

            return { [workersDepartment]: worker['wynagrodzenieKwota'] }

        })

        console.log(workersToDepPay)
        const reducedDepPay = workersToDepPay.reduce((acc, pay) => {

            console.log(acc)

            if (acc[Object.keys(pay)[0]] === undefined) {

                return { ...acc, [Object.keys(pay)[0]]: parseFloat(Object.values(pay)) }

            } else {
                
                return { ...acc, [Object.keys(pay)[0]]: parseFloat(acc[Object.keys(pay)[0]]) + parseFloat(Object.values(pay)) }
            }


        }, {})

        console.log(reducedDepPay)

        setPay(reducedDepPay)
    }, [workers])



    return (<><br></br>
        Suma zarobków wg. departamentu: <div>{Object.keys(pay).map((department, index) => {
            return (<div key={index}>{department+' '+pay[department]+' PLN'}</div>)
        }
        )}</div>
    </>
    )
}