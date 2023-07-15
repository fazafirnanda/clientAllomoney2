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
import back from "../../assets/before.png";

export default function Kategori({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingTop: 65,
          paddingHorizontal: 20,
          paddingBottom: 20,
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
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Kategori
          </Text>
          <TouchableOpacity>
            <Image
              source={back}
              style={{ width: 27, height: 27, opacity: 0 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={{ marginTop: 20, rowGap: 15 }}>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Gaji</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#979797",
            }}
          >
            <Text>Sumbangan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ marginVertical: 20, paddingHorizontal: 20, zIndex: 30 }}>
        <View
          style={{
            padding: 10,
            paddingHorizontal: 25,
            borderWidth: 1,
            borderColor: "#84563c",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#84563c",
              textAlign: "center",
              fontWeight: "700",
              fontSize: 15,
            }}
          >
            Tambah Kategori
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
