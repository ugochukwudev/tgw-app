import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
import { SelectList } from "react-native-dropdown-select-list";
import { colors } from "../constants/colors";

const CurrentWeather = ({ weatherData }: any) => {
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>();
  const [selected, setSelected] = React.useState("");
  const [data, setData] = useState<any>();
  const [total, setTotal] = useState("");
  const [mapData, setMapData] = useState<any>();

  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const fetchConverts = async () => {
    try {
      setLoading(true);

      const datares = await fetch("https://api.exchangerate.host/latest");
      const result: any = await datares.json();
      console.log(result);
      let array = Object.getOwnPropertyNames(result?.rates).map((e, i) => {
        return { key: i, value: e };
      });
      console.log(array, "oo");
      setMapData(array);
      setData(result);
    } catch (err) {
      setError("could not fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    let fromExchangeRate = data?.rates[from];
    let toExchangeRate = data?.rates[to];
    const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
    if (amount > 0 && from && to) {
      return setTotal(
        `${amount} ${from} = ${convertedAmount?.toFixed(2) || 0} ${to}`
      );
    }
    setTotal("...");
  }, [to, from, amount]);
  useEffect(() => {
    fetchConverts();
  }, []);
  return (
    <ScrollView
      scrollEnabled={true}
      style={[
        wrapper,
        {
          backgroundColor: colors.primary,
          width: "100%",
          paddingTop: 30,
        },
      ]}
    >
      <View style={container}>
        <Text
          style={{
            paddingTop: 40,
            paddingLeft: 4,
            paddingBottom: 20,
            fontSize: 30,
            color: colors.yellow,
          }}
        >
          Currency Converter
        </Text>
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="amount to convert"
          onChangeText={(text: any) => {
            setAmount(text);
          }}
        />
        <Text style={styles.label}>From</Text>

        <SelectList
          boxStyles={{
            backgroundColor: "white",
            borderColor: "white",
            marginVertical: 20,
            width: from ? "62%" : "83%",
          }}
          dropdownStyles={{
            backgroundColor: "white",
            borderColor: "black",
          }}
          search={true}
          setSelected={(val: any) => {
            console.log(data?.rates[val], "kk");
            setFrom(val);
          }}
          data={data ? mapData || [] : []}
          save="value"
          placeholder="Currency you want to convert"
        />
        <Text style={styles.label}>To</Text>
        <SelectList
          boxStyles={{
            backgroundColor: "white",
            borderColor: "white",
            marginVertical: 20,
            width: to ? "62%" : "77%",
          }}
          dropdownStyles={{
            backgroundColor: "white",
            borderColor: "black",
          }}
          setSelected={(val: any) => {
            console.log(val, "km");
            setTo(val);
          }}
          search={true}
          data={data ? mapData || [] : []}
          save={"value"}
          placeholder="Currency to convert to"
        />
        <Text style={styles.label}>Result :</Text>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 25,
            marginTop: 20,
            width: "100%",
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text style={feels}>
            {total === "..." ? (
              <ActivityIndicator size={24} color={"#f5be49"} />
            ) : (
              total
            )}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
  },
  temperature: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 20,
    color: "#000",
  },
  hiLow: {
    color: "black",
    fontSize: 20,
  },
  hiLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 30,
    color: "#000",
    paddingVertical: 10,
  },
  message: {
    fontSize: 25,
    color: "#725d34",
  },
  label: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 14,
  },
});
export default CurrentWeather;
