import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loadCitiesAction, onSitiesLoadAction} from "../actions/citiesActions";
import {getCitiesSelector} from "../selectors/cities";
import CitiesList from './cities/citiesList';
import {changeCityInputAction} from "../actions/formActions";
import {getCityInputValue} from "../selectors/getCityInputValue";

class App extends Component {
    static mapStateToProps (state, ownProps) {
        return {
            cities: getCitiesSelector(state),
            cityInputValue: getCityInputValue(state)
        }
    }

    static mapDispatchToProps (dispatch) {
        return {
            changeCityInputValue: (value) => {
                return dispatch(changeCityInputAction(value))
            },
            addCityToList: (value) => {
                const handlerChain = [
                    (value) => dispatch(onSitiesLoadAction(value)),
                    () => dispatch(changeCityInputAction(""))
                ]
                dispatch(loadCitiesAction(value, handlerChain))
            }
        }
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