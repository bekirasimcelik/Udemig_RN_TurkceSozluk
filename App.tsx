import React from 'react';
import DetailView from './src/views/DetailView';
import SearchView from './src/views/SearchView';
import HistoryView from './src/views/HistoryView';
import FavoriteView from './src/views/FavoriteView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search_V" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search_S" component={SearchStack} />
        <Tab.Screen name="Favori" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
