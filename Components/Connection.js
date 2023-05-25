import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Connection = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      bounces="false"
      style={{ padding: 8, width: "100%", height: 190 }}
    >
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#d0d0d0",
          marginRight: 20,
          marginTop: 15,
          marginLeft: 5,
          paddingLeft: 15,
          paddingBottom: 15,
          alignItems: "flex-start",
          justifyContent: "flex-end",
          height: 140,
          width: 190,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 27,
            width: 27,
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <AntDesign name="appstore1" size={24} color="purple" />
        </View>
        <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
          My Apps 🎁
        </Text>
      </View>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#d0d0d0",
          marginRight: 20,
          marginTop: 15,
          marginLeft: 5,
          paddingLeft: 15,
          paddingBottom: 15,
          alignItems: "flex-start",
          justifyContent: "flex-end",
          height: 140,
          width: 190,
        }}
      >
        <View
          style={{
            backgroundColor: "#612ccb",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            borderRadius: 30,
          }}
        >
          <MaterialIcons name="shopping-bag" size={22} color="white" />
        </View>
        <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
          Markets
        </Text>
      </View>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#d0d0d0",
          marginRight: 20,
          marginTop: 15,
          marginLeft: 5,
          paddingLeft: 15,
          paddingBottom: 15,
          alignItems: "flex-start",
          justifyContent: "flex-end",
          height: 140,
          width: 190,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            borderRadius: 30,
          }}
        >
          <FontAwesome5 name="users" size={15} color="white" />
        </View>
        <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
          My Friends
        </Text>
      </View>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#d0d0d0",
          marginRight: 20,
          marginTop: 15,
          marginLeft: 5,
          paddingLeft: 15,
          paddingBottom: 15,
          alignItems: "flex-start",
          justifyContent: "flex-end",
          height: 140,
          width: 190,
        }}
      >
        <View
          style={{
            backgroundColor: "#f1892f",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            borderRadius: 30,
          }}
        >
          <MaterialCommunityIcons name="fire" size={22} color="white" />
        </View>
        <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
          Visited shops
        </Text>
      </View>
    </ScrollView>
  );
};

export default Connection;
