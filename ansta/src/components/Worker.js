import React from 'react'

export default function Worker(props) {




    return (<>
        <div>{props.worker['imie']}</div>
        <div>{props.worker['nazwisko']}</div>
        <div>{props.worker['dzial']}</div>
        <div>{props.worker['wynagrodzenieKwota'] + ' ' + props.worker['wynagrodzenieWaluta']}</div>
    </>
    )
}