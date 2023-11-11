import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor, iconName = 'settings-outline' }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const containerStyles = [
    styles.container,
    bgColor ? { backgroundColor: 'gray' } : {},
    styles[`container_${type}`],
    { transform: [{ scale: scaleValue }] },
  ];

  const textStyles = [
    styles.text,
    styles[`text_${type}`],
    fgColor ? { color: fgColor } : {},
  ];

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={containerStyles}
    >
      <Ionicons name={iconName} size={24} color={isPressed ? 'white' : '#00aff0'} />
      <Text style={textStyles}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },

  container_PRIMARY: {
    backgroundColor: 'transparent',
  },

  container_SECONDARY: {
    borderColor: '#00aff0',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: '#00aff0',
  },

  text_SECONDARY: {
    color: '#transparent',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
