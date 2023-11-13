import { Drawer } from "expo-router/drawer"
import { Text, View } from "react-native";
export default function Index() {
    return (
        <View>
            <Drawer.Screen options={{ title:"Profile"}} />
            <Text>Profile Page</Text>
        </View>
    );
}