import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const TransferScreen = () => {
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
        backgroundColor: "#6636d7",
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
    <View style={{ backgroundColor: "#6636d7", flex: 1 }}>
      <Text>TransferScreen</Text>
    </View>
  );
};

export default TransferScreen;
