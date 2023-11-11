import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomButton = ({ iconName = 'settings-outline', onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        styles.container,
        bgColor ? { backgroundColor: 'transparent' } : {},
        styles[`container_${type}`],
        { transform: [{ scale: pressed ? 0.9 : 1 }] },
      ]}
    >
      
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fefefe',
  },

  container_PRIMARY: {
    backgroundColor: 'transparent',
  },

  container_SECONDARY: {
    borderColor: '#00aff0',
    borderWidth: 2,
  },

  container_TERTIARY: {
    // Add styles for TERTIARY if needed
  },

  text: {
    fontWeight: 'bold',
    color: '#00aff0',
  },

  text_SECONDARY: {
    // Add styles for text_SECONDARY if needed
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
