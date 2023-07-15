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

export default function CardTransaksi() {
  return (
    <>
      <Text style={{ color: "#979797", marginTop: 2 }}>33 July 2023</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderBottomColor: "#d9d9d9",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ marginBottom: 4, fontWeight: "400" }}>
            Muhammad Nauval
          </Text>
          <Text style={{ fontWeight: "400" }}>BCA</Text>
        </View>
        <View>
          <Text style={{ color: "#005E2B" }}>+Rp.100.000,00</Text>
        </View>
      </View>
    </>
  );
}
