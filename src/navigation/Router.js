import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import DestinationSearchScreen from "../screens/DestinationSearch";
// import GuestsScreen from "../screens/Guests";
// import HomeScreen from "../screens/Home";
// import PostScreen from "../screens/PostScreen";
// import HomeTabNavigator from "./HomeTabNavigator";
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import { Auth, Hub } from 'aws-amplify';

// const Stack = createNativeStackNavigator();

const Router = (props) => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.listen('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name={"Home"} component={HomeTabNavigator} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          </>
        )}
        <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen} options={{ title: "Search your destination" }} />
        <Stack.Screen name={"Guests"} component={GuestsScreen} options={{ title: "How many people?" }} />
        <Stack.Screen name={"Post"} component={PostScreen} options={{ title: "Accommodation" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;