import React, { Component } from 'react'
import {map} from 'lodash'
import CityListEntry from './cityListEntry'

class CitiesList extends Component {
    onEntrySelected (city, selectedPostCode) {
        const {onSelected, onCityValueChanged } = this.props

        if (city.postCode === selectedPostCode) {
            onSelected(null)
            return
        }

        onSelected(city.postCode)
        onCityValueChanged(city.postCode)
    }

    render () {
        const {
            cities,
            selectedPostCode,
            onCityValueChanged,
            cityInputValue,
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
                        return <CityListEntry
                            onSelected={() => this.onEntrySelected.call(this, city, selectedPostCode)}
                            isSelected={selectedPostCode === city.postCode}
                            city={city}
                        />
                    })}
                </ul>
            </div>
        )
    }
}

export default CitiesList