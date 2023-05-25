import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const QuickLinks = () => {
  return (
    <View
      style={{
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ marginTop: 4 }}>Quick links⚡️</Text>
        </View>
        <View style={{ flexDirection: "row", marginRight: 5 }}>
          <Text style={{ marginTop: 4, color: "#773ff9" }}>See more</Text>
          <Ionicons name="chevron-forward" size={24} color="#773ff9" />
        </View>
      </View>

      {/*links*/}
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          marginLeft: 5,
          marginRight: 5,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              borderRadius: 60 / 2,
            }}
          >
            <Ionicons name="card" size={28} color="white" />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "black",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            USD Card
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#45ae20",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              borderRadius: 60 / 2,
            }}
          >
            <Entypo name="wallet" size={28} color="white" />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "black",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            USD Card
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              borderRadius: 60 / 2,
            }}
          >
            <FontAwesome5 name="users" size={28} color="white" />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "black",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            USD Card
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#08a1fc",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              borderRadius: 60 / 2,
            }}
          >
            <MaterialCommunityIcons name="text-box" size={35} color="white" />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "black",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            USD Card
          </Text>
        </View>
        <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
          <View
            style={{
              backgroundColor: "#e44d93",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              borderRadius: 60 / 2,
            }}
          >
            <AntDesign name="heart" size={30} color="white" />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "black",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            USD Card
          </Text>
        </View>
        <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
          <View
            style={{
              backgroundColor: "#fe6920",
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              width: 60,
              borderRadius: 60 / 2,
            }}
          >
            <Ionicons name="ios-cart" size={32} color="white" />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "black",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            USD Card
          </Text>
        </View>
        <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
          <View
            style={{
              backgroundColor: "#105ccb",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              borderRadius: 60 / 2,
            }}
          >
            <MaterialIcons name="shopping-bag" size={32} color="white" />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "black",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            USD Card
          </Text>
        </View>
        <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
          <View
            style={{
              backgroundColor: "#dd2b41",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              borderRadius: 60 / 2,
            }}
          >
            <MaterialIcons name="storefront" size={32} color="white" />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "black",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            USD Card
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QuickLinks;
