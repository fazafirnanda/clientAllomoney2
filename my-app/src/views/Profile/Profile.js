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
import city from "../../../assets/newCity.png";
import bca from "../../../assets/bca.png";
import Riwayat from "../../../assets/riwayat.png";
import people from "../../../assets/Userr.png";
import privasi from "../../../assets/privasi.png";
import bantuan from "../../../assets/bantuan.png";
import logout from "../../../assets/logout.png";
import syarat from "../../../assets/syarat.png";
import go from "../../../assets/go.png";
export default function Profile({ navigation }) {
  const height = Dimensions.get("window").height;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Image
            source={city}
            style={{
              position: "absolute",
              height: height / 2,
              width: "100%",
              // resizeMode: "stretch",
            }}
          />
          <View
            style={{
              paddingTop: 65,
              height: height / 4,
              paddingHorizontal: 20,
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Profile</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                columnGap: 20,
                marginVertical: 30,
                alignItems: "center",
              }}
            >
              <Image
                source={bca}
                style={{ height: 60, width: 60, borderRadius: 9999 }}
              />
              <Text style={{ fontWeight: "700", fontSize: 15 }}>
                Muhammad Nauval
              </Text>
            </View>
          </View>

          <View style={{ backgroundColor: "white", padding: 20, rowGap: 25 }}>
            <View>
              <View>
                <Text>Akun</Text>
              </View>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D9D9D9",
                }}
                onPress={() => navigation.navigate("PengaturanAkun")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 10,
                  }}
                >
                  <Image source={people} style={{ width: 35, height: 35 }} />

                  <Text style={{ fontSize: 13, lineHeight: 16 }}>
                    Pengaturan Profil
                  </Text>
                </View>
                <View>
                  <Image source={go} style={{ width: 20, height: 20 }} />
                </View>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D9D9D9",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 10,
                  }}
                >
                  <Image source={Riwayat} style={{ width: 35, height: 35 }} />
                  <Text style={{ fontSize: 13, lineHeight: 16 }}>
                    Ringkasan Keuangan
                  </Text>
                </View>
                <View>
                  <Image source={go} style={{ width: 20, height: 20 }} />
                </View>
              </View>
            </View>

            <View>
              <View>
                <Text>Bantuan</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D9D9D9",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 10,
                  }}
                >
                  <Image source={bantuan} style={{ width: 35, height: 35 }} />
                  <Text style={{ fontSize: 13, lineHeight: 16 }}>
                    Pusat Bantuan
                  </Text>
                </View>
                <View>
                  <Image source={go} style={{ width: 20, height: 20 }} />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D9D9D9",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 10,
                  }}
                >
                  <Image source={syarat} style={{ width: 35, height: 35 }} />
                  <Text style={{ fontSize: 13, lineHeight: 16 }}>
                    Syarat & Ketentuan
                  </Text>
                </View>
                <View>
                  <Image source={go} style={{ width: 20, height: 20 }} />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D9D9D9",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 10,
                  }}
                >
                  <Image source={privasi} style={{ width: 35, height: 35 }} />
                  <Text style={{ fontSize: 13, lineHeight: 16 }}>
                    Kebijakan Privasi
                  </Text>
                </View>
                <View>
                  <Image source={go} style={{ width: 20, height: 20 }} />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D9D9D9",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 10,
                  }}
                >
                  <Image source={logout} style={{ width: 35, height: 35 }} />
                  <Text style={{ fontSize: 13, lineHeight: 16 }}>Logout</Text>
                </View>
                <View>
                  <Image source={go} style={{ width: 20, height: 20 }} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
