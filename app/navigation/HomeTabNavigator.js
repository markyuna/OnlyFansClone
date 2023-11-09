import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ExploreNavigator from './ExploreNavigator';
// import HomeScreen from '../screens/Home';
// import ProfileScreen from '../screens/Profile';

import { FontAwesome5, Feather } from '@expo/vector-icons';
// import PostScreen from '../screens/PostScreen';
// import SearchResultsMaps from '../screens/SearchResultsMaps';

import Page from '../index';

const Tab = createBottomTabNavigator();

  const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Page'}
        // component={ExploreNavigator}
        component={Page}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="search-location" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Saved'}
        // component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="heart" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Airbnb'}
        // component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Messages'}
        // component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="mail" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'profile'}
        // component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;