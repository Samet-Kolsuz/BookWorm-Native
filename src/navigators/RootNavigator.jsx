import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import BookDetail from '../screens/BookDetail';
import CreatePage from '../screens/CreatePage';




const Stack = createNativeStackNavigator()

const RootNavigator = () => {

    

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
      <Stack.Screen name="CreatePage" component={CreatePage} />
    </Stack.Navigator>
  );
};

export default RootNavigator;