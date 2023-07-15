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
import { LinearGradient } from "expo-linear-gradient";
import back from "../../assets/before.png";
import CardNabung from "../components/atoms/CardNabung";
import gambar1 from "../../assets/Taxes-1.png";

export default function FormBudgetBulanan({ navigation }) {
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
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={back} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}>Buat Budget Bulanan</Text>
            <TouchableOpacity>
              {/* <Image
                source={dots}
                style={{ width: 27, height: 27, opacity: 0 }}
              /> */}
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "column", rowGap: 15, marginTop: 35 }}>
            <View style={{ rowGap: 10 }}>
              <Text style={{ fontWeight: "600" }}>Dana Bulanan</Text>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  // columnGap: 7,
                  borderRadius: 10,
                  borderColor: "#979797",
                  alignItems: "center",
                }}
              >
                <Text style={{ padding: 15, fontSize: 12 }}>Rp</Text>
                <TextInput
                  style={{ borderLeftWidth: 1, padding: 10, fontSize: 12 }}
                >
                  Target Menabung
                </TextInput>
              </View>
            </View>

            <View style={{ rowGap: 10 }}>
              <Text style={{ fontWeight: "600" }}>Target Pengeluaran</Text>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  // columnGap: 7,
                  borderRadius: 10,
                  borderColor: "#979797",
                  alignItems: "center",
                }}
              >
                <Text style={{ padding: 15, fontSize: 12 }}>Rp</Text>
                <TextInput
                  style={{ borderLeftWidth: 1, padding: 10, fontSize: 12 }}
                >
                  Target Pengeluaran
                </TextInput>
              </View>
            </View>

            <View style={{ rowGap: 10 }}>
              <Text style={{ fontWeight: "600" }}>Kategori Pengeluaran</Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#979797",
                }}
              >
                <Picker
                  // style={styles.input}
                  placeholder="Isi Tanggal"
                  selectedValue={"Pilih kategori"}
                  style={{ fontSize: 12, lineHeight: 10 }}
                  // value={namaTabungan}
                  // onChangeText={(text) => setNamaTabungan(text)}
                >
                  <Picker.Item label="Pilih Kategori" value="Pilih kategori" />
                  <Picker.Item label="Senin" value="Senin" />
                  <Picker.Item label="Selasa" value="Selasa" />
                  <Picker.Item label="Rabu" value="Rabu" />
                  <Picker.Item label="Kamis" value="Kamis" />
                  <Picker.Item label="Jumat" value="Jumat" />
                  <Picker.Item label="Sabtu" value="Sabtu" />
                  <Picker.Item label="Minggu" value="Minggu" />
                </Picker>
              </View>
            </View>

            <View style={{ rowGap: 10 }}>
              <Text style={{ fontWeight: "600" }}>Pilih Bulan</Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#979797",
                }}
              >
                <Picker
                  // style={styles.input}
                  placeholder="Isi Tanggal"
                  // selectedValue={"Pilih kategori"}
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
            </View>

            <View style={{ marginTop: 30 }}>
              <CardNabung
                title={"Info Menarik"}
                paragraf={
                  "Target pengeluaranmu 62% dari penghasilan. Kamu bisa nabung Rp.2.500.000."
                }
                imageUrl={gambar1}
              />
            </View>

            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#84563c", "#b37647"]}
                style={{
                  padding: 15,
                  paddingHorizontal: 15,
                  borderRadius: 10,
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
                  Buat Target
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
