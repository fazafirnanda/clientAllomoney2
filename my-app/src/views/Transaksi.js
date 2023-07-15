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
} from "react-native";
import back from "../../assets/before.png";
import CardTransaksi from "../components/atoms/CardTransaksi";
import TotalTransaksi from "../components/atoms/TotalTransaksi";
import short from "../../assets/short.png";
import dots from "../../assets/dots3.png";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";

export default function Transaksi({ navigation, route }) {
  const { isPage } = route.params;
  // const changeTransaction = (value) => {
  //   setIsPage(value);
  // };

  // const isFocused = () => {
  //   if (isPage == "Pemasukan") {
  //   } else {
  //   }
  // };

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
          {isPage == "Pemasukan" ? (
            <Text style={{ fontWeight: "bold" }}>Pemasukan</Text>
          ) : (
            <Text style={{ fontWeight: "bold" }}>Pengeluaran</Text>
          )}

          <View style={{ opacity: 0 }}>
            <Image source={dots} style={{ width: 27, height: 27 }} />
          </View>
        </View>

        <View
          style={{
            paddingVertical: 20,
            paddingBottom: 10,
          }}
        >
          {/* <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setIsPage("Pemasukan")}
          >
            {isPage == "Pemasukan" ? (
              <View
                style={{
                  padding: 9,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                  borderRadius: 30,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e0ac6a",
                    fontSize: 12,
                  }}
                >
                  Pemasukan
                </Text>
              </View>
            ) : (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ae823aff", "#ffc66aff"]}
                style={{
                  padding: 9,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 12 }}
                >
                  Pemasukan
                </Text>
              </LinearGradient>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setIsPage("Pengeluaran")}
          >
            {isPage == "Pengeluaran" ? (
              <View
                style={{
                  padding: 9,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                  borderRadius: 30,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e0ac6a",
                    fontSize: 12,
                  }}
                >
                  Pengeluaran
                </Text>
              </View>
            ) : (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ae823aff", "#ffc66aff"]}
                style={{
                  padding: 9,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 12 }}
                >
                  Pengeluaran
                </Text>
              </LinearGradient>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setIsPage("Gabungan")}
          >
            {isPage == "Gabungan" ? (
              <View
                style={{
                  padding: 9,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                  borderRadius: 30,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e0ac6a",
                    fontSize: 12,
                  }}
                >
                  Gabungan
                </Text>
              </View>
            ) : (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ae823aff", "#ffc66aff"]}
                style={{
                  padding: 9,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "#e0ac6a",
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 12 }}
                >
                  Gabungan
                </Text>
              </LinearGradient>
            )}
          </TouchableOpacity> */}
          <View>
            {isPage == "Pemasukan" ? (
              <>
                <Text
                  style={{ textAlign: "center", fontSize: 12, lineHeight: 16 }}
                >
                  Total Pemasukan
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  Rp 400.000,00
                </Text>
              </>
            ) : (
              <>
                <Text
                  style={{ textAlign: "center", fontSize: 12, lineHeight: 16 }}
                >
                  Total Pengeluaran
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  Rp 400.000,00
                </Text>
              </>
            )}
          </View>

          <View style={{ marginTop: 17 }}>
            <Picker
              // style={styles.input}
              placeholder="Isi Tanggal"
              selectedValue={"Pilih kategori"}
              style={{ fontSize: 12, lineHeight: 10, width: "50%" }}
              // value={namaTabungan}
              // onChangeText={(text) => setNamaTabungan(text)}
            >
              <Picker.Item
                label="Bulan ini"
                value="Bulan ini"
                style={{ fontSize: 12, lineHeight: 10 }}
              />
              <Picker.Item
                label="Minggu ini"
                value="Minggu ini"
                style={{ fontSize: 12, lineHeight: 10 }}
              />
              <Picker.Item
                label="Tahun ini"
                value="Tahun ini"
                style={{ fontSize: 12, lineHeight: 10 }}
              />
            </Picker>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <View
            style={{ flexDirection: "column", rowGap: 12, paddingBottom: 20 }}
          >
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
            <CardTransaksi />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
