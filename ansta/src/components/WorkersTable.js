import React from 'react'
import Worker from './Worker'

export default function WorkersTable(props) {

    const { workers } = props


    console.log(workers)
    return (<>
        {workers.map(worker => {

            return <Worker
                worker={worker}
            ></Worker>
        })
        }
    </>
    )
}