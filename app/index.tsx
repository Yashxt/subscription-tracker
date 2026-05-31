import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
    console.log("HOME SCREEN RENDERED");
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4"> Go to ON boarding</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4"> login</Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4"> create</Link>
             <Link href="/(tabs)/subscription/spotify">spotify subsciption</Link>
            <Link
                href={{
                  pathname:"/(tabs)/subscription/[id]",
                   params : {id: "claude"}
            }}>claude max subsciption </Link>
        </View>
    );
}