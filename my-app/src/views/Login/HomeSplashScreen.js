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
import back from "../../../assets/back.png";
import splash from "../../../assets/splash-3.png";
import Allomoney from "../../../assets/allomoney.png";
import { LinearGradient } from "expo-linear-gradient";
// import DeviceInfo from "react-native-device-info";

export default function HomeSplashScreen({ navigation }) {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  // const deviceInfo = () => {
  //   console.log(DeviceInfo.getDeviceId());
  // };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingTop: 65,
          paddingHorizontal: 30,
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            columnGap: 5,
          }}
        >
          <Image source={Allomoney} style={{ width: 70, height: 70 }} />
          <Text>allomoney</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={splash}
            style={{
              height: height / 2,
              width: "100%",
              resizeMode: "contain",
              //   backgroundColor: "red",
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 17, marginBottom: 7 }}>
            Atur Keuangan Dengan Baik
          </Text>
          <Text style={{ textAlign: "center" }}>
            Kelola keuangan jadi lebih mudah dan praktis dimana aja
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Daftar")}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#84563c", "#b37647"]}
              style={{
                padding: 15,
                borderRadius: 10,
                marginTop: 27,
                marginHorizontal: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Daftar
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View
              style={{
                padding: 15,
                borderWidth: 1,
                marginTop: 10,
                borderColor: "#e0ac6a",
                borderRadius: 10,
                backgroundColor: "white",
                marginHorizontal: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#e0ac6a",
                  fontSize: 12,
                }}
              >
                Masuk
              </Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{ marginTop: 15 }}
            //  onPress={deviceInfo()}
          >
            <Text
              style={{ textDecorationLine: "underline", textAlign: "center" }}
            >
              Masuk tanpa akun
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
