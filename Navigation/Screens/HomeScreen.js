import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import PaymentCards from "../../Components/PaymentCards";
import QuickLinks from "../../Components/QuickLinks";
import ConnectionSite from "../../Components/Connection";
import Connection from "../../Components/Connection";
import PersonalInfo from "../../Components/PersonalInfo";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "pocket",
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
      },
      headerStyle: {
        backgroundColor: "white",
        height: 110,
      },
      headerRight: () => (
        <Ionicons
          name="chatbox-ellipses"
          size={30}
          color="black"
          style={{ marginRight: 20 }}
        />
      ),
      headerLeft: () => (
        <Feather
          name="maximize"
          size={30}
          color="black"
          style={{ marginLeft: 20 }}
        />
      ),
    });
  }, []);
  return (
    <ScrollView
      bounces="false"
      className="mt-16 py-2"
      style={{ backgroundColor: "#ffffff" }}
    >
      <PaymentCards />
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ddd",
          marginTop: 15,
          marginBottom: 15,
        }}
      />
      <QuickLinks />
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ddd",
        }}
      />
      <Connection />
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ddd",
        }}
      />
      <PersonalInfo />
    </ScrollView>
  );
};

export default HomeScreen;
