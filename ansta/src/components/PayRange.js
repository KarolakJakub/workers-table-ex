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

    return (<div className='sliderWrapper'>
        <Slider
            min={minmax[0]}
            max={minmax[1]}
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            marks={labels}
            valueLabelDisplay="on"></Slider>

    </div>
    )
}