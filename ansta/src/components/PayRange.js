import Slider from '@material-ui/core/Slider';
import React from 'react'

export default function PayRange(props) {

    const { minmax, payRangeSliderChange, value, test } = props

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

        payRangeSliderChange(newValue)

    };

    return (<div className='sliderWrapper'>
        <Slider
            min={minmax[0]}
            max={minmax[1]}
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="range-slider"
            marks={labels}
            valueLabelDisplay="on"></Slider>

    </div>
    )
}