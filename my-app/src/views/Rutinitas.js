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

export default function Rutinitas() {
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={{ width: 27, height: 27 }} />
          </TouchableOpacity> */}
          <Text style={{ fontWeight: "bold" }}>Rutinitas</Text>
          {/* <TouchableOpacity>
            <Image source={dots} style={{ width: 27, height: 27 }} />
          </TouchableOpacity> */}
        </View>
      </View>

      <ScrollView style={{ marginTop: 25 }}>
        <View style={{ paddingHorizontal: 20, marginVertical: 10, rowGap: 30 }}>
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "500" }}>
              Pemasukan Rutin
            </Text>
            <View style={{ rowGap: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                  paddingHorizontal: 20,
                  shadowColor: "#171717",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 10,
                }}
              >
                <Text>Gaji</Text>
                <Text style={{ color: "#C9A365" }}>Rp6.500.000,00</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                  paddingHorizontal: 20,
                  shadowColor: "#171717",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 10,
                }}
              >
                <Text>Gaji</Text>
                <Text style={{ color: "#C9A365" }}>Rp6.500.000,00</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "500" }}>
              Pengeluaran Rutin
            </Text>
            <View style={{ rowGap: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                  paddingHorizontal: 20,
                  shadowColor: "#171717",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 10,
                }}
              >
                <Text>Gaji</Text>
                <Text style={{ color: "#C9A365" }}>Rp6.500.000,00</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                  paddingHorizontal: 20,
                  shadowColor: "#171717",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 10,
                }}
              >
                <Text>Gaji</Text>
                <Text style={{ color: "#C9A365" }}>Rp6.500.000,00</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "500" }}>
              Target Rutin
            </Text>
            <View style={{ rowGap: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                  paddingHorizontal: 20,
                  shadowColor: "#171717",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 10,
                }}
              >
                <Text>Gaji</Text>
                <Text style={{ color: "#C9A365" }}>Rp6.500.000,00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
