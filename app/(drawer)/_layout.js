import React, { useState } from "react";
import { Drawer } from "expo-router/drawer";
import LogoTitle from './logoTitle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons, Feather, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerLayout() {

  return ( 
    <Drawer 
    screenOptions={{ 
        headerTitle: props => <LogoTitle {...props} />,
        headerShown: true, 
        swipeEdgeWidth: 0,
    }}
    >
        <Drawer.Screen
            name="(tabs)"
            options={{
                drawerLabel: "Home",
                drawerIcon: ({ focused }) => (
                <Icon name="home" size={30} color={focused ? "#900" : "black"} />
                ),
            }}
        />
        <Drawer.Screen
            name="profile"
            options={{
                drawerLabel: "Profil",
                drawerIcon: ({ focused }) => (
                    <Ionicons name="person-outline" size={24} color="black" />
                ),
            }}
        />
        <Drawer.Screen
            name="premium"
            options={{
                drawerLabel: "Premium",
                drawerIcon: ({ focused }) => (
                    <FontAwesome5 name="modx" size={24} color="black" />
                ),
            }}
        />
        <Drawer.Screen
            name="signets"
            options={{
                drawerLabel: "Signets",
                drawerIcon: ({ focused }) => (
                    <Feather name="bookmark" size={24} color="black" />
                ),
            }}
        />
        <Drawer.Screen
            name="lists"
            options={{
                drawerLabel: "Listes",
                drawerIcon: ({ focused }) => (
                    <MaterialIcons name="list-alt" size={24} color="black" />
                ),
            }}
        />
        <Drawer.Screen
            name="spaces"
            options={{
                drawerLabel: "Spaces",
                drawerIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="iron-board" size={24} color="black" />
                ),
            }}
        />
        <Drawer.Screen
            name="monetisation"
            options={{
                drawerLabel: "Monétisation",
                drawerIcon: ({ focused }) => (
                    <MaterialIcons name="money" size={24} color="black" />
                ),
            }}
        />
        
    </Drawer>
  )
}
