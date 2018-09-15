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

    getStyle () {
        const { isSelected } = this.props
        console.log(isSelected)
        return isSelected
            ? {backgroundColor: "#aaa", width: "200px" }
            : {}
    }

    render () {
        const { city, onSelected } = this.props
        const displayName = this.formatEntryToDisplay(city)
        const key = this.generateKey(city)
        const style = this.getStyle()

        return <li
            key={key}
            onClick={() => onSelected(city.postCode)}
            style={style}
        >
            {displayName}
        </li>
    }
}

export default CityListEntry