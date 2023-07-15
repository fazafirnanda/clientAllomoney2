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
import back from "../../../assets/before.png";

export default function PengaturanAkun({ navigation }) {
  const height = Dimensions.get("window").height;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              paddingTop: 65,
              paddingHorizontal: 20,
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              justifyContent: "space-between",
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
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                Pengaturan Akun
              </Text>
              <View>
                <Text style={{ opacity: 0 }}>.</Text>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 20,
                borderBottomWidth: 1,
                borderColor: "#D9D9D9",
                marginTop: 40,
              }}
            >
              <Image />
              <Text style={{ color: "#0CBC8B" }}>Ubah foto profil</Text>
            </View>

            <View>
              <View style={{ marginVertical: 20 }}>
                <Text style={{ fontWeight: "700" }}>Akun</Text>
              </View>

              <View style={{ rowGap: 10 }}>
                <View
                  style={{
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#d9d9d9",
                    rowGap: 5,
                  }}
                >
                  <Text>Nama Lengkap</Text>
                  <TextInput placeholder="Muhammad Nauval"></TextInput>
                </View>

                <View
                  style={{
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#d9d9d9",
                    rowGap: 5,
                  }}
                >
                  <Text>Email</Text>
                  <TextInput placeholder="Muhammadnopal1111@allomoney.com"></TextInput>
                </View>

                <View
                  style={{
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#d9d9d9",
                    rowGap: 5,
                  }}
                >
                  <Text>No. Handphone</Text>
                  <TextInput placeholder="08882828272"></TextInput>
                </View>

                <View
                  style={{
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#d9d9d9",
                    rowGap: 5,
                  }}
                >
                  <Text>Tanggal Lahir</Text>
                  <TextInput placeholder="Belum diisi"></TextInput>
                </View>
              </View>
            </View>

            <View style={{ alignItems: "center", marginTop: 30 }}>
              <TouchableOpacity>
                <Text style={{ color: "#F84A69" }}>Hapus Akun</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
