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
} from "react-native";
import mainLogo from "../../assets/mainLogo.png";

export default function Splash() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={mainLogo} style={{ width: 200, height: 200 }} />
        <Text style={{ fontSize: 20, fontStyle: "italic" }}>allomoney.</Text>
      </View>
    </View>
  );
}
