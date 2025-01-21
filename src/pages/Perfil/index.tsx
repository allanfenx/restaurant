import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons, Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../../styles/colors";
import perfil from "../../assets/perfil.png";
import edit from "../../assets/edit.png";
import { Input } from "../../components/Input";



export function Perfil() {

    const { goBack } = useNavigation();

    return (
        <LinearGradient style={styles.container} colors={["#EF2A39", "#FF2A9D"]} >

            <View style={styles.header} >
                <TouchableOpacity style={{ zIndex: 5 }} onPress={() => goBack()}  >
                    <Octicons name="arrow-left" size={30} color={colors.WHITE} />
                </TouchableOpacity>
                <TouchableOpacity style={{ zIndex: 5 }} onPress={() => goBack()}  >
                    <Ionicons name="settings-sharp" size={30} color={colors.WHITE} />
                </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
                <Image source={perfil} resizeMode="contain" width={129} style={styles.image} />

                <View style={styles.wrapInput} >

                    <Input text="Name" width={60} value="Sophia Patel" />

                    <Input text="Email" width={60} value="sophiapatel@gmail.com" />

                    <Input text="Delivery address" width={130} value="123 Main St Apartment 4A,New York, NY " />

                    <Input text="Password" width={80} value="******" />

                </View>

                <View style={styles.line} />

                <View style={{ width: "100%", paddingHorizontal: 30, marginTop: 20, rowGap: 10 }} >
                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }} >
                        <Text style={styles.text} >Payment Details</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color={colors.GRAY80} />
                    </View>

                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.text} >Order history</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color={colors.GRAY80} />
                    </View>
                </View>

                <View style={styles.wrapButton} >
                    <TouchableOpacity style={styles.buttonEdit} >
                        <Text style={styles.texButtonEdit} >Edit Profile</Text>
                        <Image source={edit} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogout} >
                        <Text style={styles.texButtonLogout} >Log out</Text>
                        <Entypo name="log-out" size={24} color={colors.RED} />
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}