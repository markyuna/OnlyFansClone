import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Authenticator, Stack } from 'expo-router';
import { API, Amplify, Hub } from 'aws-amplify';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);


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
      removeListener(); // cleanup function
    };
  }, []);

  return (
    <Authenticator.Provider>
      <Authenticator theme={{/* Personaliza el tema aquí si es necesario */}}>
        <Stack screenOptions={{ headerShown: false }} />
      </Authenticator>
    </Authenticator.Provider>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
