import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import HomeStacks from "./src/navigations/Homestack";
import Banking from "./assets/Banking.svg";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <HomeStacks />
      </NavigationContainer>
      {/* <View>
        <Banking width={700} height={700} />
      </View> */}
    </>
  );
}
