
import { Image, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default function LogoTitle() {
    return (
      <View style={styles.logoHeader}>
        <Image
          style={{ width: 200, height: 50, marginRight: 40, marginLeft: 10, }}
          source={{ uri: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1699833798/only_logo_tiewd2.png' }}
        />
        <Link href={'/settings'}>
          <AntDesign name="setting" size={24} color="#00aff0" />
        </Link>
      </View>
    );
  }
  const styles = StyleSheet.create({
    
    logoHeader: {
      marginTop: -5,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginHorizontal: 20,
    }
  });