import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BudgetBulanan from "../views/BudgetBulanan";
import CatatTabunganmu from "../views/CatatTabunganmu";
import Dompet from "../views/Dompet";
import FormBudgetBulanan from "../views/FormBudgetBulanan";
import Home from "../views/Home";
import Kategori from "../views/Kategori";
import Daftar from "../views/Login/Daftar";
import HomeSplashScreen from "../views/Login/HomeSplashScreen";
import Login from "../views/Login/Login";
import PengaturanAkun from "../views/Profile/PengaturanAkun";
import Splash from "../views/Splash";
import TabunganImpian from "../views/TabunganImpian";
import TargetRutin from "../views/TargetRutin";
import Transaksi from "../views/Transaksi";
import tabManager from "./TabBottom";

const Stack = createNativeStackNavigator();

const Homestacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* {setTimeout(() => {
        <Stack.Screen name="Splash" component={Splash} />;
      }, 1000)} */}

      <Stack.Screen name="tabManager" component={tabManager} />
      <Stack.Screen name="HomeSplashScreen" component={HomeSplashScreen} />
      <Stack.Screen name="Daftar" component={Daftar} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabunganImpian" component={TabunganImpian} />
      <Stack.Screen name="Transaksi" component={Transaksi} />
      <Stack.Screen name="Dompet" component={Dompet} />
      <Stack.Screen name="Kategori" component={Kategori} />
      <Stack.Screen name="PengaturanAkun" component={PengaturanAkun} />
      <Stack.Screen name="BudgetBulanan" component={BudgetBulanan} />
      <Stack.Screen name="FormBudgetBulanan" component={FormBudgetBulanan} />
      <Stack.Screen name="CatatTabunganmu" component={CatatTabunganmu} />
      <Stack.Screen name="TargetRutin" component={TargetRutin} />
    </Stack.Navigator>
  );
};

export default Homestacks;
