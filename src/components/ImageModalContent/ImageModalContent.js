import React, { useState, useRef } from 'react';
import { StyleSheet, Image, View } from 'react-native'; // Importa Share desde 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const ImageModalContent = ({ user, toggleImageModal, handleSharePress }) => {

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.modalHeader}>
        <Ionicons
          name="close"
          size={28}
          color="white"
          onPress={toggleImageModal}
          style={{ marginLeft: 20, marginTop: 40 }}
        />

        <FontAwesome
          name="ellipsis-h"
          size={28}
          color="white"
          style={{ marginRight: 20, marginTop: 40 }}
          onPress={handleSharePress}
        />
      </View>

      <View style={styles.modalView}>
        <Image
          source={{ uri: user.avatar }}
          style={{
            position: 'relative',
            width: 300,
            height: 300,
            borderRadius: 400 / 2,
          }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ImageModalContent;

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  modalView: {
    marginVertical: 150,
    alignItems: 'center',
  },
});
