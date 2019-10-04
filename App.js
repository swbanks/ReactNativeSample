import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime } from './api';

const MainNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event',
    }),
  },
});

const App = createAppContainer(MainNavigator);

export default App;
