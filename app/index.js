import { Link } from 'expo-router';
import { StyleSheet, View, FlatList, Text } from 'react-native';
// import users from '../assets/data/users';
import UserCard from '../src/components/UserCard';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { User } from '../src/models';

// const user = users[0];

export default function Page() {
  const [users, setUsers] = useState([]);

  const { signOut } = useAuthenticator();

/* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
used to fetch users from the `DataStore` and update the state of the component with the fetched
users. */
  useEffect(() => {
    // fetch users
    DataStore.query(User).then(setUsers);
  }, []);

  return (
    <View style={styles.container}>
      <Link href={'/newPost'}>New post</Link>
      <Text onPress={() => signOut()}>Sign out</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
});