import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const PersonalInfo = () => {
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            padding: 2,
          }}
        >
          <Text style={{ fontWeight: "600" }}>count% </Text>
          <Text style={{ fontWeight: "600" }}>complete</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            marginLeft: 10,
            marginRight: 10,
            padding: 2,
          }}
        >
          <Text style={{ fontWeight: "300", fontSize: 12, color: "#adadad" }}>
            Complete your tasks - swipe right for more
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces="false"
        style={{ padding: 8, width: "100%", height: 190 }}
      >
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#fff1df",
            marginRight: 10,
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
              alignSelf: "flex-end",
              backgroundColor: "#fe9305",
              marginRight: 20,
              borderRadius: 20,
              marginTop: 20,
              height: 25,
              width: 80,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>Press here</Text>
          </View>
          <View
            style={{
              backgroundColor: "#c0c0c0",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Ionicons
              name="ios-alert"
              size={22}
              color="white"
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </View>
          <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
            About Us
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#fff1df",
            marginRight: 10,
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
              alignSelf: "flex-end",
              backgroundColor: "#fe9305",
              marginRight: 20,
              borderRadius: 20,
              marginTop: 20,
              height: 25,
              width: 80,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>Press here</Text>
          </View>
          <View
            style={{
              backgroundColor: "#c0c0c0",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Ionicons
              name="ios-alert"
              size={22}
              color="white"
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </View>
          <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
            Add a photo
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#fff1df",
            marginRight: 10,
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
              alignSelf: "flex-end",
              backgroundColor: "#fe9305",
              marginRight: 20,
              borderRadius: 20,
              marginTop: 20,
              height: 25,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>Edit</Text>
          </View>
          <View
            style={{
              backgroundColor: "#c0c0c0",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Ionicons
              name="ios-alert"
              size={22}
              color="white"
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </View>
          <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
            Add a bio
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#fff1df",
            marginRight: 10,
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
              alignSelf: "flex-end",
              backgroundColor: "#fe9305",
              marginRight: 20,
              borderRadius: 20,
              marginTop: 20,
              height: 25,
              width: 80,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>Press here</Text>
          </View>
          <View
            style={{
              backgroundColor: "#c0c0c0",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Ionicons
              name="ios-alert"
              size={22}
              color="white"
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </View>
          <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
            Verify Identity
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#fff1df",
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
              alignSelf: "flex-end",
              backgroundColor: "#fe9305",
              marginRight: 20,
              borderRadius: 20,
              marginTop: 20,
              height: 25,
              width: 80,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>Press here</Text>
          </View>
          <View
            style={{
              backgroundColor: "#c0c0c0",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Ionicons
              name="ios-alert"
              size={22}
              color="white"
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </View>
          <Text style={{ color: "black", fontWeight: "700", margin: 10 }}>
            Fund Account
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalInfo;
