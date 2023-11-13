import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function TabsLayout() {
    const tabBarIcon = (name, size, color) => ({ color, size }) => (
        <MaterialIcons name={name} size={size} color={color} />
    );

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="home"
                options={{
                    showTabLabel: false,
                    tabBarIcon: tabBarIcon('home', 24, '#00aff0'),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    showTabLabel: false,
                    tabBarIcon: tabBarIcon('search', 24, 'black'),
                }}
            />
            <Tabs.Screen
                name="communaute"
                options={{
                    showTabLabel: false,
                    tabBarIcon: tabBarIcon('group', 24, 'black'),
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    showTabLabel: false,
                    tabBarIcon: tabBarIcon('notifications-none', 24, 'black'),
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    showTabLabel: false,
                    tabBarIcon: tabBarIcon('mail-outline', 24, 'black'),
                }}
            />
        </Tabs>
    );
}
