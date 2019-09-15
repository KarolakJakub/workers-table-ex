import Slider from '@material-ui/core/Slider';
import React, {useState, useEffect} from 'react'

export default function PayRange(props) {

    const { minmax, payRangeSliderChange, value } = props

    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {

        if(inputValue[0] >= minmax[0] && inputValue[0] <= minmax[1]){

            const newValue = [inputValue[0], value[1]]
            payRangeSliderChange(newValue)

        }

        if(inputValue[1] <= minmax[1] && inputValue[1] >= minmax[0]){

            const newValue = [value[0], inputValue[1]]
            payRangeSliderChange(newValue)

        }

    }, [inputValue])

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

    const handleInputChange = (event) => {

        if(event.target.name === 'inputMin'){

            const newValue = [event.target.value === '' ? 0 :parseInt(event.target.value), inputValue[1]]
            console.log(newValue)

            setInputValue(newValue)


        }else if(event.target.name === 'inputMax'){

            const newValue = [inputValue[0], event.target.value === '' ? 0 :parseInt(event.target.value)]

            setInputValue(newValue)

        }
        // setInputValue(event.target.value)

    }

    return (<div className='sliderWrapper'>{console.log(inputValue)}
        <Slider
            min={minmax[0]}
            max={minmax[1]}
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="range-slider"
            marks={labels}
            valueLabelDisplay="on"></Slider>
        <input
        value={inputValue[0]}
        name='inputMin'
        onChange={handleInputChange}
        ></input>
        -
        <input
        value={inputValue[1]}
        name='inputMax'
        onChange={handleInputChange}
        ></input>

    </div>
    )
}