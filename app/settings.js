import { Link } from 'expo-router';
import React from "react";
import { StyleSheet, View, Pressable, Text, FlatList } from "react-native";
import { Auth } from 'aws-amplify';

const SettingScreen = () => {

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>      
      <View style={styles.container}>
        <Link href={'/newPost'}>New post</Link>
 
      </View>
      <Pressable
        onPress={signOut}
        style={{
          width: '50%',
          height: 40,
          backgroundColor: '#cfcfcf',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 500,
        }}>
        <Text>Sign out</Text> 
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 40,
    backgroundColor: '#cfcfcf',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default SettingScreen;