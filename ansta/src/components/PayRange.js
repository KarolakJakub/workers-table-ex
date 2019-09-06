import Slider from '@material-ui/core/Slider';
import React, { useEffect, useState } from 'react'

export default function PayRange(props) {

    const {minmax, payRangeSliderChange} = props

    const [payRange, setPayRange] = useState(minmax)

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

    const handleChange = (event, newValue) => {
        setPayRange(newValue);
        payRangeSliderChange(payRange)
        return null
    };

    return (
        <Slider
            min={minmax[0]}
            max={minmax[1]}
            value={payRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            marks={labels}
            valueLabelDisplay="on"
        // getAriaValueText={valuetext}
        />
    )
}