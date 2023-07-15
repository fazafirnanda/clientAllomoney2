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
import { LinearGradient } from "expo-linear-gradient";
import back from "../../assets/before.png";
import dots from "../../assets/3dots.png";
import CardNabung from "../components/atoms/CardNabung";
import gambar1 from "../../assets/BI.png";
import gambar2 from "../../assets/Taxes.png";

import bca from "../../assets/bca.png";
export default function TabunganImpian({ navigation }) {
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
            <Text style={{ fontWeight: "bold" }}>Tabungan Impian</Text>
            <TouchableOpacity>
              <Image
                source={dots}
                style={{ width: 27, height: 27, opacity: 0 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 35 }}>
            <Text style={{ fontWeight: "bold" }}>
              Yuk Nabung dan Wujudkan Impianmu Bersama Allo Sekarang!
            </Text>
          </View>

          <View
            style={{ flexDirection: "column", rowGap: 16, marginBottom: 10 }}
          >
            <CardNabung
              title={"Tanpa Administrasi"}
              paragraf={
                "Tabungan Allomoney: Bebas biaya, keuntungan nyata tanpa tambahan."
              }
              imageUrl={gambar1}
            />
            <CardNabung
              title={"Nabung Dengan Target"}
              paragraf={"Nabung Allomoney: Target tercapai, tabungan terarah."}
              imageUrl={gambar2}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("CatatTabunganmu")}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#84563c", "#b37647"]}
              style={{
                padding: 20,
                paddingHorizontal: 15,
                borderRadius: 20,
                marginTop: 27,
                marginHorizontal: 15,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Kuy, Atur Sekarang
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
