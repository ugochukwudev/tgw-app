import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";
import Header from "../components/Header";
import { Image } from "react-native";
const PendingRequests = () => {
  const activeMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <LinearGradient
      colors={[colors.yellow, colors.primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, backgroundColor: colors.darkPrimary }}
    >
      <ScrollView>
        <View
          style={{
            marginTop: 70,
            width: "90%",
            display: "flex",
            alignSelf: "center",
          }}
        >
          <Header name="Pending Requests" />
        </View>

        {activeMap.splice(0, 6).map(() => {
          return (
            <View
              style={{
                marginTop: 20,
                backgroundColor: colors.white,
                width: "90%",
                display: "flex",
                alignSelf: "center",
                borderRadius: 16,
                flexDirection: "row",
              }}
            >
              <Image
                style={{
                  width: "40%",
                  height: "100%",
                  borderRadius: 16,
                }}
                source={require("../../assets/user-image.jpeg")}
              />
              <View
                style={{
                  marginLeft: "5%",
                  width: "50%",
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    textDecorationLine: "underline",
                    color: colors.darkPrimary,
                    fontWeight: "500",
                  }}
                >
                  Ugochkwu Paul
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: colors.darkPrimary,
                    fontWeight: "400",
                  }}
                >
                  Desc : A harworking and smart developer willing to learn as
                  much as possible.{" "}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.black,
                      width: "40%",
                      paddingVertical: 5,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 999,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.white,
                      }}
                    >
                      Reject
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.black,
                      width: "45%",
                      paddingVertical: 5,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 999,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.white,
                      }}
                    >
                      Approve
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
};

export default PendingRequests;
