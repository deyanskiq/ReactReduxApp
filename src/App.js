import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import LibraryList from './components/common/LibraryList';

import reducers from './reducers';

//Provider tag is glue between redux and react
//Provider can have one single child

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex: 1}}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};
export default App;
