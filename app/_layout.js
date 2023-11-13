// import * as React from 'react';
// import { Button, Text, StyleSheet, View, FlatList } from 'react-native';

import { Stack } from 'expo-router';
import { API, Amplify, Hub, DataStore } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { Authenticator } from '@aws-amplify/ui-react-native';
import { useEffect } from 'react';


Amplify.configure(awsconfig);

const CreateUserMutation = `
mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    handle
    bio
    subscriptionPrice
  }
}
`;

export default function RootLayout() {

  useEffect(() => {
    const removeListener = Hub.listen('auth', async (data) => {
      if (data.payload.event === 'signIn') {
        const userInfo = data.payload.data.attributes;
        console.log(JSON.stringify(userInfo, null, 2));

        // DataStore.save(new User({ id: userInfo.sub, name: userInfo.name, handle: userInfo.nickname,
        //   subscriptionPrice: 0, }));

        // save user to database
        const newUser = {
          id: userInfo.sub,
          name: userInfo.name,
          handle: userInfo.nickname,
          subscriptionPrice: 0,
        };
        await API.graphql({
          query: CreateUserMutation,
          variables: { input: newUser },
        });
        console.log('User saved to database');
      }
    });

    return () => {
      // cleanup function
      removeListener();
    };
  }, []);

  return (
    <Authenticator.Provider>
      <Authenticator>
        <Stack screenOptions={{ headerShown: false }}  />
        {/* <DrawerLayout /> */}
      </Authenticator>
    </Authenticator.Provider>
  );
}