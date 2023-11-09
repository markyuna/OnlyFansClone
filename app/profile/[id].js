import React from "react";
import { View, Pressable, Text } from "react-native";
import { Auth } from 'aws-amplify';

const ProfileScreen = () => {


  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>      
      <Pressable
        onPress={signOut}
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#cfcfcf',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Sign out</Text> 
      </Pressable>
    </View>
  );
};

export default ProfileScreen;