import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './components/App'

const store = configureStore()

console.log(store.getState())

      // Every time the state changes, log it
      // Note that subscribe() returns a function for unregistering the listener
     const unsubscribe = store.subscribe(() =>
      console.log(store.getState())
     )
      
      // Dispatch some actions
      /*store.dispatch(addTodo('Learn about actions'))
      store.dispatch(addTodo('Learn about reducers'))
      store.dispatch(addTodo('Learn about store'))
      store.dispatch(toggleTodo(0))
      store.dispatch(toggleTodo(1))
      store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))*/
      
      // Stop listening to state updates
      //unsubscribe()


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}