import React, { useEffect, useState } from 'react'

export default function DepartmentsFilter(props) {

    const { workers, onDepFilterChange } = props

    const [depList, setDepList] = useState(buildDepList(workers))

    useEffect(() => onDepFilterChange(depList)
        , [depList])

    useEffect(()=> setDepList(buildDepList(workers))

    , [workers])

    function buildDepList(workers) {

        return workers.reduce((acc, worker) => {

            return { ...acc, [worker['dzial']]: true }

        }, {})
    }

    function handleCheckboxChange(event) {

        setDepList({ ...depList, [event.target.name]: !depList[event.target.name] })

    }


    return (<>

        {
            Object.keys(depList).map((department, index) => {
                return <div key={index}>
                    {department}
                    <input
                        name={department}
                        type="checkbox"
                        checked={depList[department]}
                        onChange={handleCheckboxChange}
                    ></input>
                </div>
            })
        }

    </>
    )
}