import React, { Component } from 'react'
import {get} from 'lodash'

class CityListEntry extends Component {
    formatEntryToDisplay ({placeName, stateAbbreviation})  {
        return `${placeName}, ${stateAbbreviation}`
    }

    generateKey (city)  {
        const latitude = get(city, 'latitude')
        const longitude = get(city, 'longitude')
        return `${latitude}${longitude}`
    }

    render () {
        const { city } = this.props
        const displayName = this.formatEntryToDisplay(city)
        const key = this.generateKey(city)
        return <li key={key}>{displayName}</li>
    }
}

export default CityListEntry