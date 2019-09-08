import Slider from '@material-ui/core/Slider';
import React, { useEffect, useState } from 'react'

export default function PayRange(props) {

    const { minmax, payRangeSliderChange, value } = props

    const [payRange, setPayRange] = useState(minmax)
    const [rangeInputs, setRangeInputs] = useState(minmax)

    const labels = [
        {
            value: minmax[0],
            label: minmax[0]
        },
        {
            value: minmax[1],
            label: minmax[1]
        }
    ]

    const handleSliderChange = (event, newValue) => {
        setPayRange(newValue);
        payRangeSliderChange(newValue)
        return null
    };

    function handleMinInputChange(event) {

        if (parseFloat(event.target.value) > payRange[0] && parseFloat(event.target.value) < payRange[1]) {
            const newRange = [parseFloat(event.target.value), payRange[1]]
            setPayRange(newRange)
            payRangeSliderChange(newRange)
            return
        } else {
            event.target.value.concat('lol')
           
        }
    }

    function handleMaxInputChange(event) {
        const newRange = [payRange[0], parseFloat(event.target.value)]
        setPayRange(newRange)
        payRangeSliderChange(payRange)
    }

    return (<>{console.log(payRange)}
        <Slider
            min={minmax[0]}
            max={minmax[1]}
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            marks={labels}
            valueLabelDisplay="on"></Slider>
        {/* <input value={payRange[0]} onChange={handleMinInputChange}></input>-
        <input value={payRange[1]} onChange={handleMaxInputChange}></input> */}

    </>
    )
}