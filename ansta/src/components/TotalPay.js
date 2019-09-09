import React from 'react'

export default function TotalPay(props) {

    const { workers } = props

    function totalSum() {
        return workers.reduce((acc, worker) => {
            
            return acc = acc + parseFloat(worker['wynagrodzenieKwota'])
        },0)
    }


    return (<>
        <h3>Całkowita suma zarobków:</h3> <div>{totalSum()} PLN</div>
    </>
    )
}