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
import investment from "../../assets/Investments.png";
import taxes from "../../assets/Taxes-1.png";

export default function BudgetBulanan({ navigation }) {
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
            <Text style={{ fontWeight: "bold" }}>Budget Bulanan</Text>
            <TouchableOpacity>
              <Image
                source={dots}
                style={{ width: 27, height: 27, opacity: 0 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 35 }}>
            <Text>
              Kelola uangmu dengan bijak, buat anggaran bulanan yang tepat.
            </Text>
          </View>

          <View
            style={{ flexDirection: "column", rowGap: 16, marginBottom: 10 }}
          >
            <CardNabung
              title={"Pantau Anggaran"}
              paragraf={
                "Kendalikan keuanganmu dengan rencana anggaran bulanan yang tepat."
              }
              imageUrl={investment}
            />
            <CardNabung
              title={"Finansial"}
              paragraf={"Atur finansialmu dengan bijak dan disiplin."}
              imageUrl={taxes}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("FormBudgetBulanan")}
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
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 13,
                  fontWeight: "bold",
                }}
              >
                Atur Budget
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
