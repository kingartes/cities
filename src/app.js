import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import React, {Component} from 'react'
import { render } from 'react-dom';
const store = createStore(() => {});

class App extends React.Component {
    render() {
        return (
            <h1>Hello, World!</h1>
        )
    }
}
const Root = connect()(App)

render(
    <Provider store={store}>
        <Root/>
        </Provider>,
        document.getElementById('root')
)

