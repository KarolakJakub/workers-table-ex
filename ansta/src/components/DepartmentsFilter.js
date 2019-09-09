import React, { useEffect, useState } from 'react'

export default function PayByDepartment(props) {

    const { workers, onDepFilterChange } = props

    const [depList, setDepList] = useState(buildDepList(workers))

    useEffect(() => onDepFilterChange(depList)
        , [depList])

    function buildDepList(workers) {

        return workers.reduce((acc, worker) => {

            return { ...acc, [worker['dzial']]: true }

        }, {})
    }

    function handleCheckboxChange(event) {

        setDepList({ ...depList, [event.target.name]: !depList[event.target.name] })

    }


    return (<>
        {console.log(depList)}
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