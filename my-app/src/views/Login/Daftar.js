import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Allomoney from "../../../assets/allomoney.png";
import back from "../../../assets/before.png";
const baseUrl = "https://alo-money-production.up.railway.app/user/register";
import axios from "axios";

export default function Daftar({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    const data = {
      name,
      email,
      password,
    };

    axios
      .post(baseUrl, data)
      .then((result) => {
        console.log("berhasil");
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingTop: 65,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={{ width: 27, height: 27 }} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image source={Allomoney} style={{ width: 70, height: 70 }} />
          <Text style={{ color: "#e0ac6a", fontSize: 20, fontWeight: "700" }}>
            Daftar Akun
          </Text>
        </View>

        <View style={{ rowGap: 13 }}>
          <TextInput
            placeholder="Nama lengkap"
            name="namaLengkap"
            value={name}
            onChangeText={(value) => setName(value)}
            style={{
              padding: 13,
              paddingHorizontal: 25,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "black",
            }}
          ></TextInput>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            name="email"
            style={{
              padding: 13,
              paddingHorizontal: 25,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "black",
            }}
          ></TextInput>
          <TextInput
            placeholder="Kata Sandi"
            value={password}
            onChangeText={(value) => setPassword(value)}
            name="password"
            secureTextEntry={true}
            style={{
              padding: 13,
              paddingHorizontal: 25,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "black",
            }}
          ></TextInput>
          {/* <TextInput
            placeholder="Nama lengkap"
            style={{
              padding: 13,
              paddingHorizontal: 25,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "black",
            }}
          ></TextInput> */}
        </View>

        <View>
          <TouchableOpacity onPress={submit}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#84563c", "#b37647"]}
              style={{
                padding: 15,
                borderRadius: 15,
                marginTop: 27,
                marginHorizontal: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Daftar
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 15,
            }}
          >
            <Text>Sudah Punya Akun? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#84563c" }}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
