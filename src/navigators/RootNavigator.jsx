import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import BookDetail from '../screens/BookDetail';
import CreatePage from '../screens/CreatePage';
import pages from '../constants';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={pages.HOMEPAGE} component={HomePage} />
      <Stack.Screen name={pages.BOOKDETAIL} component={BookDetail} />
      <Stack.Screen name={pages.CREATEPAGE} component={CreatePage} />
    </Stack.Navigator>
  );
};

export default RootNavigator;