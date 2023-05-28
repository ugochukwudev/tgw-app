import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
import { SelectList } from "react-native-dropdown-select-list";

const CurrentWeather = ({ weatherData }: any) => {
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>();
  const [selected, setSelected] = React.useState("");
  const [data, setData] = useState<any>();
  const [total, setTotal] = useState("");
  const dataApi = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

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

      const datares = await fetch(
        "https://v6.exchangerate-api.com/v6/2d1bba6a50da98046daccc2c/latest/USD"
      );
      const result: any = await datares.json();
      console.log(result);
      setData(result);
    } catch (err) {
      setError("could not fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    let fromExchangeRate = data?.conversion_rates[from];
    let toExchangeRate = data?.conversion_rates[to];
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
      style={[
        wrapper,
        { backgroundColor: "#9873fe", width: "100%", paddingVertical: 10 },
      ]}
    >
      <View style={container}>
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
            width: "60%",
            backgroundColor: "white",
            borderColor: "white",
            marginVertical: 20,
          }}
          dropdownStyles={{
            backgroundColor: "white",
            borderColor: "black",
          }}
          search={false}
          setSelected={(val: any) => {
            console.log(val);
            setFrom(val);
          }}
          data={
            data ? Object.getOwnPropertyNames(data?.conversion_rates) || [] : []
          }
          save="value"
          placeholder="Currency you want to convert"
        />
        <Text style={styles.label}>To</Text>
        <SelectList
          boxStyles={{
            width: "60%",
            backgroundColor: "white",
            borderColor: "white",
            marginVertical: 20,
          }}
          dropdownStyles={{
            backgroundColor: "white",
            borderColor: "black",
          }}
          setSelected={(val: any) => {
            console.log(val);
            setTo(val);
          }}
          search={false}
          data={
            data ? Object.getOwnPropertyNames(data?.conversion_rates) || [] : []
          }
          save={"key"}
          placeholder="Currency to convert to"
        />
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 25,
            marginTop: 20,
            width: "90%",
            backgroundColor: "black",
            paddingVertical: 10,
          }}
        >
          <Text style={feels}>{total}</Text>
        </View>
      </View>
      <RowText
        messageOne={""}
        messageTwo={"fastest way to covert your currency in seconds"}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
      <Text style={{ padding: 6, color: "black", marginBottom: 6 }}>
        Note: use the currency short name. Example : to convert United State
        Dollar, type USD{" "}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temperature: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "white",
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
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
  label: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "white",
    width: "95%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 14,
  },
});
export default CurrentWeather;
