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
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import back from "../../assets/before.png";
import dots from "../../assets/3dots.png";
import CardNabung from "../components/atoms/CardNabung";
import bca from "../../assets/bca.png";
import group from "../../assets/Group-1.png";

export default function CatatTabunganmu({ navigation }) {
  const [namaTabungan, setNamaTabungan] = useState("");
  const [targetSaldo, setTargetSaldo] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [targetWaktu, setTargetWaktu] = useState("");

  const handleSave = () => {
    // Lakukan sesuatu dengan data yang diinputkan
    console.log("Nama Tabungan:", namaTabungan);
    console.log("Target Saldo:", targetSaldo);
    console.log("Deskripsi:", deskripsi);
    console.log("Target Waktu:", targetWaktu);

    // Reset nilai input setelah disimpan
    setNamaTabungan("");
    setTargetSaldo("");
    setDeskripsi("");
    setTargetWaktu("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              paddingTop: 65,
              paddingHorizontal: 20,
              // backgroundColor: "#FEF0CD",
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
              <Text style={{ fontWeight: "bold" }}>Buat Target</Text>
              <TouchableOpacity>
                <Image
                  source={dots}
                  style={{ width: 27, height: 27, opacity: 0 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ paddingTop: 35 }}>
            <View style={styles.container}>
              <Text style={{ fontSize: 13 }}>Nama Tabungan</Text>
              <TextInput
                style={styles.input}
                placeholder="Nama Tabungan"
                value={namaTabungan}
                onChangeText={(text) => setNamaTabungan(text)}
              />
              <Text style={{ fontSize: 13 }}>Target Saldo</Text>
              <TextInput
                style={styles.input}
                placeholder="Target Saldo"
                value={targetSaldo}
                onChangeText={(text) => setTargetSaldo(text)}
              />
              <Text style={{ fontSize: 13 }}>Deskripsi</Text>
              <TextInput
                style={styles.input}
                placeholder="Deskripsi"
                value={deskripsi}
                onChangeText={(text) => setDeskripsi(text)}
              />
              <Text style={{ fontSize: 13 }}>Target Waktu</Text>
              <TextInput
                style={styles.input}
                placeholder="Target Waktu"
                value={targetWaktu}
                onChangeText={(text) => setTargetWaktu(text)}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("TargetRutin")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#84563c", "#b37647"]}
                  style={{
                    padding: 15,
                    paddingHorizontal: 15,
                    borderRadius: 15,
                    marginTop: 27,
                    marginHorizontal: 15,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Lanjutkan
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              {/* <Button title="Simpan" onPress={handleSave} /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // alignItems: "center",

    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#D9D9D9",
    fontSize: 12,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
