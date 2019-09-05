import React from 'react'

export default function Worker(props) {




    return (<>
        <div>{props.worker['imie']+' '+props.worker['nazwisko']+' '+props.worker['dzial']+' '+props.worker['wynagrodzenieKwota'] + ' ' + props.worker['wynagrodzenieWaluta']}</div>

    </>
    )
}