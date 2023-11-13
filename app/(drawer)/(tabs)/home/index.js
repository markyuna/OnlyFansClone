
import { Link, Stack } from 'expo-router';
import { StyleSheet, View, FlatList } from 'react-native';
import UserCard from '../../../../src/components/UserCard';
import { useEffect, useState } from 'react';
import { DataStore } from "aws-amplify"
import { User } from '../../../../src/models';
import { AntDesign } from '@expo/vector-icons';

export default function Index() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch users
    DataStore.query(User).then(setUsers);
  }, []);

  return (
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => <UserCard user={item} />}
          showsVerticalScrollIndicator={false}
        />

        <Link href={'/newPost'} style={styles.buttonNewPost}>
          <AntDesign name="pluscircle" size={50} color="#00aff0" />
        </Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // paddingTop: 35,
  },
  buttonNewPost: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  logoHeader: {
    marginTop: -5,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  }
});