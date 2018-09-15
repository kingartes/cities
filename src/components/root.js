import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loadCitiesAction, onCitiesLoadAction, setSelectedPostCodeAction, replaceSelectedPostCodesAction} from "../actions/citiesActions";
import {getCitiesSelector, isPostCodeAlreadyExistSelector, getSelectedPostCodeSelector} from "../selectors/cities";
import CitiesList from './cities/citiesList';
import {changeCityInputAction} from "../actions/formActions";
import {getCityInputValue} from "../selectors/getCityInputValue";

class App extends Component {
    static mapStateToProps (state, ownProps) {
        return {
            cities: getCitiesSelector(state),
            cityInputValue: getCityInputValue(state),
            selectedPostCode: getSelectedPostCodeSelector(state)
        }
    }

    static mapDispatchToProps (dispatch) {
        return {
            setSelectedPostCode: (value) => {
                dispatch(setSelectedPostCodeAction(value))
            },
            changeCityInputValue: (value) => {
                return dispatch(changeCityInputAction(value))
            },
            addCityToList: (value) => {
                return dispatch((innerDispatch, getState) => {
                    const state = getState()
                    const isExistPostCode = isPostCodeAlreadyExistSelector(state, value)
                    const selectedPostCode = getSelectedPostCodeSelector(state)
                    if (!isExistPostCode) {
                        const citiesUpdateHandler = selectedPostCode
                            ? [
                                (res) => innerDispatch(replaceSelectedPostCodesAction(res, selectedPostCode)),
                                (res) => innerDispatch(setSelectedPostCodeAction(value))
                            ]
                            : [ (res) => innerDispatch(onCitiesLoadAction(res)) ]
                        const handlerChain = [
                            ...citiesUpdateHandler,
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
        const {
            cities,
            changeCityInputValue,
            cityInputValue,
            addCityToList,
            selectedPostCode,
            setSelectedPostCode
        } = this.props


        return (
            <CitiesList
                selectedPostCode={selectedPostCode}
                cities={cities}
                cityInputValue={cityInputValue}
                onCityValueChanged={changeCityInputValue}
                addCityToList={addCityToList}
                onSelected={setSelectedPostCode}
            />
        )
    }
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App)