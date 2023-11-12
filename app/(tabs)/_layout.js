import { Tabs } from 'expo-router';
import { Feather, MaterialIcons } from '@expo/vector-icons';


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen 
                name="home" 
                options={{
                    showTabLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={24} color="black" />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="search" 
                options={{
                    showTabLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={24} color="black" />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="communaute" 
                options={{
                    showTabLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="group" size={24} color="black" />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="notifications" 
                options={{
                    showTabLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="notifications-none" size={24} color="black" />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="messages" 
                options={{
                    showTabLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="mail-outline" size={24} color="black" />
                    ),
                }} 
            />
        </Tabs>
    );
}