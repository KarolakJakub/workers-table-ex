import React from 'react'

export default function TotalPay(props) {

    const { workers } = props

    function totalSum() {
        return workers.reduce((acc, worker) => {
            
            return acc = acc + parseFloat(worker['wynagrodzenieKwota'])
        },0)
    }


    return (<><br></br>
        Całkowita suma zarobków: {totalSum()} PLN
    </>
    )
}