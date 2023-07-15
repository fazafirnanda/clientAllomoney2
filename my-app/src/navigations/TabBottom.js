import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home";
import pemasukkan from "../../assets/pemasukkan.jpg";
import { Image } from "react-native";
import Transaksi from "../views/Transaksi";
import Dompet from "../views/Dompet";
import BudgetBulanan from "../views/BudgetBulanan";
import TabunganImpian from "../views/TabunganImpian";
import CatatTabunganmu from "../views/CatatTabunganmu";
import TargetRutin from "../views/TargetRutin";
import FormBudgetBulanan from "../views/FormBudgetBulanan";

import Akun from "../../assets/profile.png";
import Beranda from "../../assets/house-2.png";
import Aktivitas from "../../assets/clipboard-text.png";
import add from "../../assets/add.png";
import DompetFocused from "../../assets/solar_wallet-outline.png";
// import CreateTransaction from "../views/CreateTransaction";
import TambahTransaksi from "../views/TambahTransaksi";
import HomeSplashScreen from "../views/Login/HomeSplashScreen";
import Riwayat from "../../assets/clipboard-text.png";
import Profile from "../views/Profile/Profile";
import BerandaFocused from "../../assets/houseFocused.png";
import profileFocused from "../../assets/profileFocused.png";
import rutinitasFocused from "../../assets/rutinitasFocused.png";
import aktivitasFocused from "../../assets/aktivitasFocused.png";
import activity from "../../assets/activity.png";
import rutinitas from "../../assets/rutinitas.png";
import Rutinitas from "../views/Rutinitas";

const Tab = createBottomTabNavigator();

const TabManager = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          // borderTopColor: 0,
          paddingVertical: 1,
        },
        animationEnabled: true,
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name == "Beranda") {
            icon = focused ? BerandaFocused : Beranda;
          } else if (route.name == "Aktivitas") {
            icon = focused ? aktivitasFocused : activity;
          } else if (route.name == "Rutinitas") {
            icon = focused ? rutinitasFocused : rutinitas;
          } else if (route.name == "Akun") {
            icon = focused ? profileFocused : Akun;
          } else if (route.name == "Transaksi Baru") {
            icon = add;
          }
          return <Image source={icon} style={{ width: 25, height: 25 }} />;
        },
        tabBarActiveTintColor: "#84563c",
        tabBarInactiveTintColor: "#CAC6C6",
      })}
    >
      <Tab.Screen name="Beranda" component={Home}></Tab.Screen>
      <Tab.Screen name="Aktivitas" component={Transaksi}></Tab.Screen>
      <Tab.Screen
        name="Transaksi Baru"
        component={TambahTransaksi}
      ></Tab.Screen>
      <Tab.Screen name="Rutinitas" component={Rutinitas}></Tab.Screen>
      <Tab.Screen name="Akun" component={Profile}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabManager;
