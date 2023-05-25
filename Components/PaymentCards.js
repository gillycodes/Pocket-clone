import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FlipCard from "react-native-flip-card";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LoanButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#009688",
      borderRadius: 7,
      paddingVertical: 10,
      paddingHorizontal: 12,
      alignContent: "center",
      justifyContent: "center",
      height: 34,
    }}
  >
    <Text
      style={{
        fontSize: 10,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
const ViewOptionButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#303134",
      borderRadius: 7,
      paddingVertical: 10,
      paddingHorizontal: 12,
      alignContent: "center",
      justifyContent: "center",
      height: 34,
    }}
  >
    <Text
      style={{
        fontSize: 10,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
const AddCashButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#fff",
      borderRadius: 7,
      paddingVertical: 10,
      paddingHorizontal: 12,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
      height: 34,
    }}
  >
    <AntDesign
      name="plus"
      size={12}
      color="#020202"
      style={{ marginRight: 3, alignSelf: "center" }}
    />
    <Text
      style={{
        fontSize: 12,
        color: "#020202",
        fontWeight: "bold",
        alignSelf: "center",
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
const SendMoneyButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#009688",
      borderRadius: 7,
      paddingVertical: 10,
      paddingHorizontal: 12,
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "row",
      height: 34,
    }}
  >
    <Text
      style={{
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
      }}
    >
      {title}
    </Text>
    <MaterialCommunityIcons
      name="hand-pointing-right"
      size={15}
      color="white"
      style={{ marginLeft: 3, alignSelf: "center" }}
    />
  </TouchableOpacity>
);

const PaymentCards = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      bounces="false"
      style={{ padding: 8, width: "100%", height: 205 }}
    >
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd) => {
          console.log("isFlipEnd", isFlipEnd);
        }}
      >
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#6636d7",
            marginRight: 5,
            marginTop: 15,
            marginLeft: 15,
            paddingLeft: 23,
            paddingRight: 23,
            paddingBottom: 23,
            height: 180,
            width: 320,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontSize: 10,
                  width: 100,
                  height: 11,
                  color: "#e6e6e6",
                  fontWeight: "600",
                  marginTop: 23,
                }}
              >
                PRIMARY ACCOUNT
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    width: 10,
                    height: 20,
                    marginTop: 4,
                    marginLeft: 6,
                    fontSize: 15,
                    color: "white",
                  }}
                >
                  ₦
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >{`\u2022`}</Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >{`\u2022`}</Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "white",
                    marginTop: 7,
                  }}
                >{`\u2022`}</Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >{`\u2022`}</Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >{`\u2022`}</Text>
              </View>
            </View>
            <View style={{ width: 30, marginTop: 15 }}>
              <Image
                source={require("../assets/pocket2.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 10, color: "#bbbbbb", fontWeight: "500" }}
                >
                  POCKET APP
                </Text>
                <MaterialCommunityIcons
                  name="alpha-r-circle-outline"
                  size={5}
                  color="#bbbbbb"
                  style={{ marginTop: 2 }}
                />
                <Text
                  style={{ fontSize: 10, color: "#bbbbbb", fontWeight: "500" }}
                >
                  {" "}
                  ID
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: "white" }}>@User Name</Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 10, color: "#bbbbbb", fontWeight: "500" }}
              >
                VFD MICROFINANCE BANK
              </Text>
              <Text style={{ fontSize: 12, color: "white", marginLeft: 65 }}>
                Account No.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "red",
                width: 120,
                borderRadius: 7,
                marginRight: 5,
              }}
            >
              <AddCashButton title={"Add Cash"} />
            </View>
            <View
              style={{
                backgroundColor: "red",
                width: 140,
                borderRadius: 7,
                marginLeft: 5,
              }}
            >
              <SendMoneyButton title={"Send Money"} />
            </View>
          </View>
        </View>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#6636d7",
            marginRight: 5,
            marginTop: 15,
            marginLeft: 15,
            padding: 25,
            alignItems: "flex-start",
            justifyContent: "flex-end",
            height: 180,
            width: 320,
          }}
        >
          <View>
            <Text style={{ fontSize: 8, color: "white", fontWeight: "600" }}>
              TAP HERE TO FLIP THIS CARD.
            </Text>
            <View
              style={{ flexDirection: "row", marginTop: 2, marginBottom: 2 }}
            >
              <Text style={{ fontSize: 8, color: "white", fontWeight: "600" }}>
                POCKET APP
              </Text>
              <MaterialCommunityIcons
                name="alpha-r-circle-outline"
                size={5}
                color="white"
                style={{ marginTop: 1 }}
              />
              <Text style={{ fontSize: 8, color: "white", fontWeight: "600" }}>
                {" "}
                IS A PRODUCT OF
              </Text>
            </View>
            <Text style={{ fontSize: 8, color: "white", fontWeight: "600" }}>
              PIGGYVEST
            </Text>
          </View>
        </View>
      </FlipCard>
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd) => {
          console.log("isFlipEnd", isFlipEnd);
        }}
      >
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#020202",
            marginRight: 5,
            marginTop: 15,
            marginLeft: 5,
            padding: 20,
            height: 180,
            width: 320,
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View style={{ marginRight: 75, marginTop: 6 }}>
              <Text style={{ color: "white", fontSize: 13, fontWeight: "500" }}>
                DEBT FREE <Text style={{ fontSize: 11 }}> 🥳</Text>
              </Text>
            </View>
            <View style={{ marginLeft: 77, marginBottom: 13 }}>
              <Image
                source={require("../assets/pocket2.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <View style={{ marginRight: 50 }}>
              <Text style={{ color: "gray", fontSize: 10 }}>COMING SOON</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18, color: "white" }}>{`\u2022`}</Text>
                <Text style={{ fontSize: 18, color: "white" }}>{`\u2022`}</Text>
                <Text style={{ fontSize: 18, color: "white" }}>{`\u2022`}</Text>
              </View>
            </View>
            <View style={{ marginLeft: 55 }}>
              <Text style={{ color: "gray", fontSize: 10 }}>
                INTEREST RATE/DAY
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  fontWeight: "700",
                  marginLeft: 65,
                  marginTop: 6,
                }}
              >
                0.07%
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "red",
                width: 110,
                borderRadius: 7,
                marginRight: 20,
              }}
            >
              <LoanButton title={"Get a Loan"} />
            </View>
            <View
              style={{
                backgroundColor: "#303134",
                width: 140,
                borderRadius: 7,
                marginLeft: 10,
              }}
            >
              <ViewOptionButton title={"View Options"} />
            </View>
          </View>
        </View>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#020202",
            marginRight: 5,
            marginTop: 15,
            marginLeft: 5,
            padding: 25,
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: 20,
            height: 180,
            width: 320,
          }}
        >
          <View>
            <View>
              <Text style={{ color: "white", fontSize: 8, fontWeight: "500" }}>
                YOU CAN BUY FROM ANY [POCKET
              </Text>
              <View style={{ flexDirection: "row", marginTop: 2 }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    fontWeight: "500",
                  }}
                >
                  APP
                </Text>
                <MaterialCommunityIcons
                  name="alpha-r-circle-outline"
                  size={5}
                  color="#bbbbbb"
                  style={{ marginBottom: 8 }}
                />
                <Text
                  style={{ color: "white", fontSize: 8, fontWeight: "500" }}
                >
                  ] SHOP AND PAY ANYTIME OR IN
                </Text>
              </View>
              <Text style={{ color: "white", fontSize: 8, fontWeight: "500" }}>
                INSTALLMENTS FOR AS LONG AS 120
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 8,
                  fontWeight: "500",
                  marginTop: 2,
                }}
              >
                DAYS
              </Text>
            </View>
            <View style={{ marginTop: 12 }}>
              <Text style={{ color: "white", fontSize: 8, fontWeight: "500" }}>
                YOU MUST HAVE A PIGGEYVEST
              </Text>
              <Text style={{ color: "white", fontSize: 8, fontWeight: "500" }}>
                ACCOUNT TO USE THIS SERVICE
              </Text>
            </View>
          </View>
        </View>
      </FlipCard>
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd) => {
          console.log("isFlipEnd", isFlipEnd);
        }}
      >
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#020202",
            marginRight: 20,
            marginTop: 15,
            marginLeft: 5,
            padding: 25,
            height: 180,
            width: 320,
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#dd2b41",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              height: 37,
              width: 37,
              borderRadius: 60 / 2,
              alignSelf: "flex-end",
            }}
          >
            <MaterialIcons name="storefront" size={25} color="white" />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 11, color: "#bbbbbb", fontWeight: "500" }}>
              MAKE MONEY ON YOUR POCKET APP
            </Text>
            <MaterialCommunityIcons
              name="alpha-r-circle-outline"
              size={8}
              color="#bbbbbb"
              style={{}}
            />
            <Text style={{ fontSize: 6, marginLeft: 2, marginTop: 2 }}>🎉</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              width: "52%",
              height: 30,
              marginTop: 25,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text>Get Started</Text>
            <FontAwesome5
              name="arrow-right"
              size={15}
              color="black"
              style={{ marginLeft: 5 }}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#020202",
            marginRight: 20,
            marginTop: 15,
            marginLeft: 5,
            padding: 25,
            height: 180,
            width: 320,
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 8, color: "white", fontWeight: "500" }}>
                OPENING A SHOP ON POCKET APP
              </Text>
              <MaterialCommunityIcons
                name="alpha-r-circle-outline"
                size={6}
                color="white"
              />
              <Text
                style={{
                  fontSize: 8,
                  color: "white",
                  fontWeight: "500",
                  marginLeft: 2,
                }}
              >
                IS
              </Text>
            </View>
            <Text
              style={{
                fontSize: 8,
                color: "white",
                fontWeight: "500",
                marginTop: 2,
              }}
            >
              FREE.
            </Text>
          </View>
        </View>
      </FlipCard>
    </ScrollView>
  );
};

export default PaymentCards;
