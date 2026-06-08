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
            <Text className="text-xl font-bold text-blue-500 ">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4"> Go to ON boarding</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4"> login</Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4"> create</Link>
             <Link href="/subscription/spotify">spotify subsciption</Link>
            <Link
                href={{
                  pathname:"/subscription/[id]",
                   params : {id: "claude"}
            }}>claude max subsciption </Link>
        </SafeAreaView>
    );
}