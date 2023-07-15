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
import bca from "../../../assets/Bank.png";
export default function CardDompet() {
  return (
    <View
      style={{
        borderRadius: 10,
        padding: 20,
        paddingVertical: 15,
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
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          columnGap: 17,
          alignItems: "center",
          width: "50%",
        }}
      >
        <Image
          source={bca}
          style={{ width: 40, height: 40, borderRadius: 9999 }}
        />
        <Text style={{ fontSize: 15, fontWeight: "800" }}>BCA</Text>
      </View>
      <View
        style={{
          width: "50%",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ color: "#C9A365" }}>Rp. 400.000,00</Text>
      </View>
    </View>
  );
}
