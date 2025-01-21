import { BackHandler, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export function Confirmation() {

    const { navigate } = useNavigation();

    useEffect(() => {

        const handleBackPress = () => {
            return true;
        };
        BackHandler.addEventListener("hardwareBackPress", handleBackPress)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.alertCard}>
                <MaterialCommunityIcons name="check-circle" size={90} color={colors.RED} style={{ marginTop: 26 }} />
                <Text style={styles.textSuccess}>Success !</Text>

                <Text style={styles.text} >Your payment was successful. A receipt for this purchase has been sent to your email.</Text>

                <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => navigate("Home")} ><Text style={styles.textButton}>Go Back</Text></TouchableOpacity>
            </View>
        </View>
    )
}