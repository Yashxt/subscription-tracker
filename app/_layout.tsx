import {SplashScreen, Stack} from "expo-router";
import {useFonts} from "expo-font"
import {useEffect} from "react"
SplashScreen.preventAutoHideAsync()   // use this so that it can hide splash screen before even fonts load which causes a flash effect
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
        <Stack screenOptions={{ headerShown: false }}>
        </Stack>
    );
}