import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loadCitiesAction, onSitiesLoadAction} from "../actions/citiesActions";
import {getCitiesSelector, isPostCodeAlreadyExistSelector} from "../selectors/cities";
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
                return dispatch((innerDispatch, getState) => {
                    const state = getState()
                    const isExistPostCode = isPostCodeAlreadyExistSelector(state, value)
                    if (!isExistPostCode) {
                        const handlerChain = [
                            (value) => innerDispatch(onSitiesLoadAction(value)),
                            () => innerDispatch(changeCityInputAction(""))
                        ]
                        dispatch(loadCitiesAction(value, handlerChain))
                    } else {
                        innerDispatch(changeCityInputAction(""))
                        throw new Error("PostCode already exists")
                    }
                })
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