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
import bca from "../../../assets/bca.png";
export default function CardNabung({ title, imageUrl, paragraf }) {
  return (
    <View
      style={{
        borderRadius: 10,
        padding: 20,
        paddingVertical: 15,
        backgroundColor: "white",
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
          flexDirection: "column",
          rowGap: 6,
          width: "75%",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "600" }}>{title}</Text>
        <Text style={{ fontSize: 12, lineHeight: 16 }}>{paragraf}</Text>
      </View>
      <View
        style={{
          width: "25%",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Image
          source={imageUrl}
          style={{
            width: 60,
            height: 60,
            borderRadius: 9999,
            resizeMode: "center",
          }}
        />
      </View>
    </View>
  );
}
