import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ListNews from './components/ListNews';
import reducer from './store/reducers';
import Header from './components/Header';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <ListNews />
      </Provider>
    );
  }
}
