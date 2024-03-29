import React, { useEffect, useState } from 'react'

export default function PayByDepartment(props) {

    const { workers } = props

    const [pay, setPay] = useState({})

    useEffect(() => {

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

        setPay(reducedDepPay)
        
    }, [workers])



    return (<><br></br>
        <h3>Suma zarobków wg. departamentu:</h3> {Object.keys(pay).map((department, index) => {
            return (<div key={index}><b>{department + ':'}</b>{+pay[department] + ' PLN'}</div>)
        }
        )}
    </>
    )
}