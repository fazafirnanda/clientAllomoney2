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
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Bank from "../../../assets/Banking.svg";
import { SvgCssUri } from "react-native-svg";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";
import group from "../../../assets/BI.png";
import { LinearGradient } from "expo-linear-gradient";

export default function FormTargetMenabung({ waktu }) {
  return (
    <>
      <Text style={{ fontSize: 13, fontWeight: "600" }}>Setiap {waktu}</Text>
      <View
        style={{ borderBottomWidth: 1, paddingVertical: 1, marginVertical: 10 }}
      >
        <Picker
          // style={styles.input}
          placeholder="Isi Tanggal"
          selectedValue={"Pilih hari"}
          // value={namaTabungan}
          // onChangeText={(text) => setNamaTabungan(text)}
        >
          <Picker.Item label="Pilih hari" value="Pilih hari" />
          <Picker.Item label="Senin" value="Senin" />
          <Picker.Item label="Selasa" value="Selasa" />
          <Picker.Item label="Rabu" value="Rabu" />
          <Picker.Item label="Kamis" value="Kamis" />
          <Picker.Item label="Jumat" value="Jumat" />
          <Picker.Item label="Sabtu" value="Sabtu" />
          <Picker.Item label="Minggu" value="Minggu" />
        </Picker>
      </View>
      <View
        style={{
          marginVertical: 15,
          padding: 15,
          borderRadius: 20,
          shadowColor: "#171717",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          backgroundColor: "white",
          elevation: 2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            rowGap: 10,
          }}
        >
          <Text style={{ color: "black" }}>Nominal</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}
          >
            <Text style={{ fontWeight: "bold" }}>Rp. </Text>
            <TextInput
              // style={styles.input}
              placeholder="Target Saldo..."
              style={{ color: "black" }}
              // value={targetSaldo}
              // onChangeText={(text) => setTargetSaldo(text)}
            />
          </View>
        </View>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={group}
            style={{
              resizeMode: "contain",
              width: 60,
              height: 60,
            }}
          />
        </View>
      </View>

      <TouchableOpacity style={{ padding: 10, paddingHorizontal: 20 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#84563c", "#b37647"]}
          style={{
            padding: 15,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            Buat Target
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
}
