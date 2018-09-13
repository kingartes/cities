import React, { Component } from 'react'
import {get} from 'lodash'

class CityListEntry extends Component {
    formatEntryToDisplay (city)  {
        const cityName = get(city, 'place name', '')
        const stateAbbreviation = get(city, 'state abbreviation', '')
        return `${cityName}, ${stateAbbreviation}`
    }

    generateKey (city)  {
        const latitude = get(city, 'latitude')
        const longitude = get(city, 'longitude')
    }

    render () {
        const { city } = this.props
        const displayName = this.formatEntryToDisplay(city)
        const key = this.generateKey(city)
        return <li key={key}>{displayName}</li>
    }
}

export default CityListEntry