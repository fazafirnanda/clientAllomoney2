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
import back from "../../assets/backWhite.png";
import FormTargetMenabung from "../components/molecules/FormTargetMenabung";
import { useState } from "react";

export default function TargetRutin({ navigation }) {
  const [isTarget, setIsTarget] = useState("Mingguan");

  const width = Dimensions.get("window").width;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              paddingTop: 65,
              paddingHorizontal: 20,
              paddingBottom: 10,
              backgroundColor: "#84563c",
              shadowColor: "#171717",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              //   backgroundColor: "white",
              elevation: 2,
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
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Target Rutin
              </Text>
              <TouchableOpacity>
                <Image
                  source={back}
                  style={{ width: 27, height: 27, opacity: 0 }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginVertical: 30,
                backgroundColor: "white",
                padding: 20,
                borderRadius: 11,
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
              <Text>Tabungan Impian</Text>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 15,
                  shadowColor: "#171717",
                  marginTop: 10,
                  borderRadius: 11,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 2,
                }}
              >
                <Text style={{ fontWeight: "700", paddingBottom: 10 }}>
                  Rumah
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 7,
                  }}
                >
                  <Text>Target Saldo</Text>
                  <Text style={{ fontWeight: "700" }}>Rp. 1.000.000,00</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Target Tercapai</Text>
                  <Text style={{ fontWeight: "700" }}>07 Jul 2030</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}
          >
            <View>
              <Text style={{ fontSize: 13, fontWeight: "600" }}>
                Target Menabung setiap*
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  columnGap: 7,
                  paddingVertical: 15,
                  paddingBottom: 25,
                }}
              >
                <TouchableOpacity
                  style={{ width: (width * 1) / 5 }}
                  onPress={() => setIsTarget("Mingguan")}
                >
                  {isTarget == "Mingguan" ? (
                    <View
                      style={{
                        padding: 9,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: "#84563c",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "#84563c",
                          fontSize: 12,
                        }}
                      >
                        Mingguan
                      </Text>
                    </View>
                  ) : (
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#84563c", "#b37647"]}
                      style={{
                        padding: 9,
                        borderRadius: 30,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 12,
                        }}
                      >
                        Mingguan
                      </Text>
                    </LinearGradient>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ width: (width * 1) / 5 }}
                  onPress={() => setIsTarget("Bulanan")}
                >
                  {isTarget == "Bulanan" ? (
                    <View
                      style={{
                        padding: 9,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: "#84563c",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "#84563c",
                          fontSize: 12,
                        }}
                      >
                        Bulanan
                      </Text>
                    </View>
                  ) : (
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#84563c", "#b37647"]}
                      style={{
                        padding: 9,
                        borderRadius: 30,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 12,
                        }}
                      >
                        Bulanan
                      </Text>
                    </LinearGradient>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ width: (width * 1) / 5 }}
                  onPress={() => setIsTarget("Tahunan")}
                >
                  {isTarget == "Tahunan" ? (
                    <View
                      style={{
                        padding: 9,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: "#84563c",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "#84563c",
                          fontSize: 12,
                        }}
                      >
                        Tahunan
                      </Text>
                    </View>
                  ) : (
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#84563c", "#b37647"]}
                      style={{
                        padding: 9,
                        borderRadius: 30,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 12,
                        }}
                      >
                        Tahunan
                      </Text>
                    </LinearGradient>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View>
              {isTarget == "Mingguan" ? (
                <FormTargetMenabung waktu="Minggu" />
              ) : (
                ""
              )}
              {isTarget == "Bulanan" ? (
                <FormTargetMenabung waktu="Bulan" />
              ) : (
                ""
              )}
              {isTarget == "Tahunan" ? (
                <FormTargetMenabung waktu="Tahun" />
              ) : (
                ""
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
