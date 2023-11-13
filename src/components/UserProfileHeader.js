import React, { useState, useRef } from 'react';
import { Link, useRouter } from 'expo-router';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable, 
  Modal,
  Share
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CustomButton from './CustomButton/CustomButton';

import ImageModalContent from './ImageModalContent/ImageModalContent';

const UserProfileHeader = ({ user, isSubscribed, setIsSubscribed }) => {
  const [isImageModalVisible, setImageModalVisible] = useState(false);

  const router = useRouter();

  const toggleImageModal = () => {
    setImageModalVisible(!isImageModalVisible);
  };


  const handleSharePress = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this profile!',
        url: user.avatar, // You can replace this with the actual URL you want to share
        title: 'Profile Share',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  

  return (
    <View>
      <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
        <View style={styles.overlay} />

        <SafeAreaView
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back"
            size={28}
            color="white"
            style={{ marginRight: 10 }}
          />

          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
                marginBottom: 5,
              }}
            >
              {user.name}
            </Text>
            <Text style={{ color: 'white' }}>
              1.4K Posts · 64.3K Likes · 15.3K Fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -50,
          }}
          >
          <Pressable onPress={toggleImageModal}>
            <Image
              source={{ uri: user.avatar }}
              style={styles.userImage}
            />
          </Pressable>

          <Modal
            animationType="slide"
            transparent={false}
            visible={isImageModalVisible}
            onRequestClose={toggleImageModal}
          >
            <ImageModalContent
              user={user}
              toggleImageModal={toggleImageModal}
              handleSharePress={handleSharePress}
            />    
          </Modal>
        </View>
        
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 250,
            marginTop: -40,
          }} >
        
          <CustomButton
            onPress={() => console.log('Edit profile pressed')}
            text={<Ionicons name="settings-outline" size={24} color="#00aff0" text="Edit" />}
          />
          <CustomButton
            onPress={handleSharePress}
            text={<FontAwesome name="share-square-o" size={24} color="#00aff0" />}
          />
        </View>

        <Text style={{ fontSize: 20, fontWeight: '600', marginVertical: 5 }}>
          {user.name}
        </Text>
        
        <Link href={{ pathname: "/profile/[id].js" }}>
          <Text style={{ color: 'gray', marginBottom: 10 }}>@{user.handle}</Text>
        </Link>

        <Text style={{ lineHeight: 20 }} numberOfLines={5}>
          {user.bio}
        </Text>

        <Text style={{ color: 'gray', marginTop: 20, fontWeight: 'bold' }}>
          SUBSCRIPTION
        </Text>

        <Pressable
          onPress={() => setIsSubscribed(!isSubscribed)}
          style={[
            styles.button,
            { backgroundColor: isSubscribed ? 'white' : 'royalblue' },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? 'royalblue' : 'white' },
            ]}
          >
            {isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
          </Text>
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? 'royalblue' : 'white' },
            ]}
          >
            {user.subscriptionPrice === 0
              ? 'FOR FREE'
              : `$${user.subscriptionPrice.toFixed(2)} / month`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: 200,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
    marginRight: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: 'royalblue',
    fontWeight: '600',
  },
  // modalHeader: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: 10,
  // },
  // modalView: {
  //   marginVertical: 150,
  //   alignItems: 'center',
  // },
});
export default UserProfileHeader;