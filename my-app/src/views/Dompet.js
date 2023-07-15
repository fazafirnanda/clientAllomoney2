import React from "react";
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
import back from "../../assets/back.png";
import dots from "../../assets/3dots.png";
import bca from "../../assets/bca.png";
import CardDompet from "../components/atoms/CardDompet";
import { LinearGradient } from "expo-linear-gradient";

export default function Dompet() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            paddingTop: 65,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Dompet</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              rowGap: 4,
              paddingVertical: 30,
              paddingBottom: 15,
            }}
          >
            <Text style={{ fontSize: 13 }}>Jumlah Saldo Keseluruhan</Text>
            <Text style={{ color: "#C9A365" }}>Rp400.000,00</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              rowGap: 7,
              paddingVertical: 20,
              paddingBottom: 15,
            }}
          >
            <Text style={{ marginBottom: 10, fontSize: 15, fontWeight: "600" }}>
              Dompet Saya
            </Text>

            <View style={{ flexDirection: "column", rowGap: 13 }}>
              <CardDompet />
              <CardDompet />
              <CardDompet />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#85573c",
                padding: 15,
                borderRadius: 15,
                marginTop: 27,
                marginHorizontal: 15,
              }}
            >
              {/* <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ae823aff", "#ffc66aff"]}
                style={{
                  padding: 15,
                  borderRadius: 15,
                  marginTop: 27,
                  marginHorizontal: 15,
                  backgroundColor: "#85573c",
                }}
              > */}
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Tambah Dompet
              </Text>
              {/* </LinearGradient> */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
