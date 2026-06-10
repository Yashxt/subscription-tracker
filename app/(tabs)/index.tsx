import "@/global.css"
import { Text,View,Image} from "react-native";
import {HOME_USER} from "@/constants/data";
import {styled} from "nativewind"
import images from "@/constants/image"
import {SafeAreaView as RnSafeAreaView} from "react-native-safe-area-context";
import {icons} from "@/constants/icons";
import {formatCurrency} from "@/libs/utils";
import {HOME_BALANCE} from "@/constants/data";
import dayjs from "dayjs";
const SafeAreaView = styled(RnSafeAreaView)
export default function App() {
    console.log("HOME SCREEN RENDERED");
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <View className="home-header">
  <View className="home-user">

        <Image source={images.avatar} className="home-avatar"></Image>
      <Text className="home-user-name"> {HOME_USER.name}</Text>
  </View>
    <Image source={icons.add} className="home-add-icon" />

            </View>
          <View className="home-balance-card">
            <Text className="home-balance-lable">Balance</Text>
           <View className="home-balance-row">
               <Text className="home-balance-amount">
                   {formatCurrency(HOME_BALANCE.amount)}
               </Text>
                <Text className="home-balance-date">
                    {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                </Text>
           </View>
          </View>
             </SafeAreaView>
    );
}