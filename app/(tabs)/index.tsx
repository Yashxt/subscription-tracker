import "@/global.css"
import { Text} from "react-native";
import {Link} from "expo-router";
import {styled} from "nativewind"
import {SafeAreaView as RnSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RnSafeAreaView)
export default function App() {
    console.log("HOME SCREEN RENDERED");
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-5xl font-sans-extrabold text-blue-500 ">
                Home
            </Text>

            <Link href="/onboarding" className="mt-4 font-sans-bold rounded bg-primary text-white p-4"> Go to ON boarding</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded font-sans-bold bg-primary text-white p-4"> Go to sign in </Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded font-sans-bold bg-primary text-white p-4">Go to sign up </Link>`
        </SafeAreaView>
    );
}