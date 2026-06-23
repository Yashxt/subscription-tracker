import "@/global.css"
import { Text,View,Image,FlatList} from "react-native";
import {HOME_USER, HOME_BALANCE, UPCOMING_SUBSCRIPTIONS,HOME_SUBSCRIPTIONS} from "@/constants/data";
import {styled} from "nativewind"
import images from "@/constants/image"
import {SafeAreaView as RnSafeAreaView} from "react-native-safe-area-context";
import {icons} from "@/constants/icons";
import {formatCurrency} from "@/libs/utils";
import dayjs from "dayjs";
import {useState} from "react";
import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import SubscriptionCard from "@/components/SubscriptionCard";
const SafeAreaView = styled(RnSafeAreaView)

export default function App() {
    console.log("HOME SCREEN RENDERED");
    const [expandedSubscriptionId,setExpandedSubscriptionId] = useState<string | null>();
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
          <ListHeading title="All Subscription"/>
                <FlatList
                      ListHeaderComponent={()=> (
                           <>
                               <View className="home-header">
                                   <View className="home-user">

                                       <Image source={images.avatar} className="home-avatar"></Image>
                                       <Text className="home-user-name"> {HOME_USER.name}</Text>
                                   </View>
                                   <Image source={icons.add} className="home-add-icon" />

                               </View>
                               <View className="home-balance-card">
                                   <Text className="home-balance-label">Balance</Text>
                                   <View className="home-balance-row">
                                       <Text className="home-balance-amount">
                                           {formatCurrency(HOME_BALANCE.amount)}
                                       </Text>
                                       <Text className="home-balance-date">
                                           {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                                       </Text>
                                   </View>
                               </View>
                               <View className="mb-5">
                                   <ListHeading title="Upcoming"/>
                                   <FlatList data={UPCOMING_SUBSCRIPTIONS}
                                             renderItem={({item})=>(
                                                 <UpcomingSubscriptionCard {...item}/>

                                             )}
                                             keyExtractor = {(item) => item.id}
                                             horizontal
                                             showsHorizontalScrollIndicator={false}
                                             ListEmptyComponent={<Text className="home-empty-state">No Upcoming renewals yet </Text>}
                                   />
                               </View>
                               <ListHeading title="All Subscription"/>
                           </>
                      )}
                    data={HOME_SUBSCRIPTIONS}
                     keyExtractor = {(item)=>item.id}
                          renderItem={({item})=>(<SubscriptionCard {...item}
                           expanded = {expandedSubscriptionId === item.id}
                           onPress = {()=> setExpandedSubscriptionId((currentId)=>
                               (currentId === item.id ? null : item.id)
                           )}
                          />)}
                          extraData = {expandedSubscriptionId}
                          ItemSeparatorComponent={()=> <View className="h-4"/>}
                          showsVerticalScrollIndicator={false}
                          ListEmptyComponent={<Text className="home-empty-state"> No Subscriptions Yet </Text>}
                          contentContainerClassName="pb-30"
                          />

             </SafeAreaView>
    );
}