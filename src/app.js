import {  Provider } from 'react-redux'
import React from 'react'
import configureStore  from './store/configureStore'
import { render } from 'react-dom';
import Root from './components/root'

const store = configureStore()

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
)

