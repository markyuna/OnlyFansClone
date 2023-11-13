import { Drawer } from "expo-router/drawer";
import LogoTitle from './logoTitle';

export default function DrawerLayout() {
  return ( 
    <Drawer 
    screenOptions={{ 
        headerShown: true, 
        swipeEdgeWidth: 0,
        headerTitle: props => <LogoTitle {...props} />,
    }}
    >
        <Drawer.Screen
            name="(tabs)"
            options={{
                drawerLabel: "Home",
            }}
        />
        <Drawer.Screen
            name="premium"
            options={{
                drawerLabel: "Premium",
                title: "Premium",
            }}
        />
        <Drawer.Screen
            name="profile"
            options={{
                drawerLabel: "Profile",
                title: "Profile",
            }}
        />
        <Drawer.Screen
            name="signets"
            options={{
                drawerLabel: "Signets",
                title: "Signets",
            }}
        />
    </Drawer>
  )
}
