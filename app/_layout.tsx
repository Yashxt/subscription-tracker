import {SplashScreen, Stack} from "expo-router";
import {useFonts} from "expo-font"
import {useEffect} from "react"
import { ClerkProvider, useAuth } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import { posthog } from '../src/config/posthog';
import { PostHogProvider } from 'posthog-react-native';
SplashScreen.preventAutoHideAsync()   // use this so that it can hide splash screen before even fonts load which causes a flash effect

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
    throw new Error('Add your Clerk Publishable Key to the .env file');
}
export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'sans-regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
        'sans-bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'sans-medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
        'sans-semibold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'sans-extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
        'sans-light': require('../assets/fonts/PlusJakartaSans-Light.ttf')
    })
     useEffect(()=>{
         if(fontsLoaded){
             SplashScreen.hideAsync();
         }
     },[fontsLoaded])
    if(!fontsLoaded) return null;
    return (
        <PostHogProvider
            client={posthog}
            autocapture={{
                captureScreens: false,
                captureTouches: true,
                propsToCapture: ['testID'],
            }}
        >
            <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
                <Stack screenOptions={{headerShown:false}}/>

            </ClerkProvider>
        </PostHogProvider>

    );
}