import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loadCitiesAction, addCityToListAction} from "../actions/citiesActions";
import {getCitiesSelector} from "../selectors/cities";
import CitiesList from './cities/citiesList';
import {changeCityInputAction} from "../actions/formActions";
import {getCityInputValue} from "../selectors/getCityInputValue";
import {convertCityInputToModel} from "../helpers/citiesHelper";

class App extends Component {
    static mapStateToProps (state, ownProps) {
        return {
            cities: getCitiesSelector(state),
            cityInputValue: getCityInputValue(state)
        }
    }

    static mapDispatchToProps (dispatch) {
        return {
            loadCities () {
                return dispatch(loadCitiesAction())
            },
            changeCityInputValue (value) {
                return dispatch(changeCityInputAction(value))
            },
            addCityToList (value, str) {
                const city = convertCityInputToModel(value)
                if(!city){
                    throw new Error('City format is incorrect')
                }

                return dispatch(addCityToListAction(city))
            }
        }
    }

    componentDidMount () {
        this.props.loadCities()
    }

    render() {
        const {cities, changeCityInputValue, cityInputValue, addCityToList} = this.props


        return (
            <CitiesList
                cities={cities}
                cityInputValue={cityInputValue}
                onCityValueChanged={changeCityInputValue}
                addCityToList={addCityToList}
            />
        )
    }
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App)