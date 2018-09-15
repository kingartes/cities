import React, { Component } from 'react'
import {map} from 'lodash'
import CityListEntry from './cityListEntry'

class CitiesList extends Component {
    render () {
        const {
            cities,
            cityInputValue,
            onCityValueChanged,
            addCityToList
        } = this.props
        return (
            <div>
                <input value={cityInputValue} onChange={({target: {value}})=> {
                    onCityValueChanged(value)
                }} />
                <button onClick={() => {
                    addCityToList(cityInputValue)
                }}>go</button>
                <ul>
                    {map(cities, (city) => {
                        return <CityListEntry city={city}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default CitiesList