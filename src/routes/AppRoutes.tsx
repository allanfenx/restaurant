import { createNativeStackNavigator } from "@react-navigation/native-stack/src";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Chechekout } from "../pages/Checkout";
import { Payment } from "../pages/Payment";
import { Confirmation } from "../pages/Confirmation";
import { Perfil } from "../pages/Perfil";



const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name="Home" component={Home} />
            <Screen name="Details" component={Details} />
            <Screen name="Checkout" component={Chechekout} />
            <Screen name="Payment" component={Payment} />
            <Screen name="Confirmation" component={Confirmation} />
            <Screen name="Perfil" component={Perfil} />
        </Navigator>
    )
}