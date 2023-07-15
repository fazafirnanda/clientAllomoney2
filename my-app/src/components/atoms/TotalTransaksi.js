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
import arrowUp from "../../../assets/Up.png";
import arrowDown from "../../../assets/Down.png";

export default function TotalTransaksi() {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 15,
        shadowColor: "#171717",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        backgroundColor: "white",
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{ flexDirection: "row", columnGap: 15, alignItems: "center" }}
        >
          <View>
            <Image source={arrowUp} style={{ height: 30, width: 30 }} />
          </View>
          <View>
            <Text style={{ fontSize: 12, lineHeight: 16 }}>Pemasukan</Text>
            <Text style={{ color: "#C9A365", fontSize: 12, lineHeight: 16 }}>
              Rp. 120.000,00
            </Text>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", columnGap: 15, alignItems: "center" }}
        >
          <View>
            <Image source={arrowDown} style={{ height: 30, width: 30 }} />
          </View>
          <View>
            <Text style={{ fontSize: 12, lineHeight: 16 }}>Pengeluaran</Text>
            <Text style={{ color: "#C9A365", fontSize: 12, lineHeight: 16 }}>
              Rp. 20.000,00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
