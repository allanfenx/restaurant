import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";
import { styles, } from "./styles";
import { useNavigation } from "@react-navigation/native";

import checkout from "../../assets/checkout.png"

import colors from "../../styles/colors";
import { sideOptions, topping } from "../../utils/data";
import { Options } from "../../components/Options";


export function Chechekout() {

    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.conatiner} >
            <View style={styles.header} >
                <TouchableOpacity style={{ zIndex: 5 }} onPress={() => goBack()}  >
                    <Octicons name="arrow-left" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ zIndex: 5 }}>
                    <Entypo name="log-out" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.contentCheckout} >
                <Image source={checkout} style={styles.image} resizeMode="contain" />

                <View style={{ width: 142 }} >
                    <Text style={styles.customizeText} ><Text style={styles.customize} > Customize </Text> Your Burger {"\n"} to Your Tastes. Ultimate {"\n"} Experience</Text>

                    <Text style={styles.portion} >Portion</Text>
                    <View style={styles.menuOrder} >
                        <Entypo name="minus" size={40} color={colors.WHITE} style={styles.buttonPlusAndMinus} />
                        <Text style={styles.numberOrder} >1</Text>
                        <Entypo name="plus" size={40} color={colors.WHITE} style={styles.buttonPlusAndMinus} />
                    </View>
                </View>
            </View>

            <Text style={styles.topping} >Toppings</Text>

            <View>
                <FlatList data={topping} keyExtractor={item => String(item.id)}
                    contentContainerStyle={{ gap: 30, marginTop: 8 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Options title={item.title} image={item.image} />
                        )
                    }}
                />
            </View>

            <Text style={styles.topping}>
                Side Options
            </Text>

            <View>
                <FlatList data={sideOptions} keyExtractor={item => String(item.id)}
                    contentContainerStyle={{ gap: 30, marginTop: 8 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Options title={item.title} image={item.image} />
                        )
                    }}
                />
            </View>

            <View style={styles.menu} >
                <View  >
                    <Text style={styles.textTotal} >Total</Text>
                    <Text style={styles.cifra} >$ <Text style={styles.price} >16.49</Text></Text>
                </View>

                <TouchableOpacity style={styles.buttonOrder} onPress={() => navigate("Payment")} ><Text style={styles.textOrderNow} > ORDER NOW</Text></TouchableOpacity>
            </View>
        </View>
    )
}