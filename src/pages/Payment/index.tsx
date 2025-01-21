import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Octicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { cardPayment } from "../../utils/data";
import { useState } from "react";
import { CreditCard } from "../../components/CreditCard";


export function Payment() {

    const [checkBox, setCheckBox] = useState(1);

    function handleSelectPayment(id: number) {
        setCheckBox(id)
    }

    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity style={{ zIndex: 5 }} onPress={() => goBack()}  >
                    <Octicons name="arrow-left" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ zIndex: 5 }}>
                    <Entypo name="log-out" size={24} />
                </TouchableOpacity>
            </View>

            <Text style={styles.textSumary} >Order summary</Text>

            <View style={styles.details} >
                <View style={styles.wrapItemDetails} >
                    <Text style={styles.textItem} >Order</Text>
                    <Text style={styles.textItem}>$16.48</Text>
                </View>

                <View style={styles.wrapItemDetails}>
                    <Text style={styles.textItem}>Taxes</Text>
                    <Text style={styles.textItem}>$0.3</Text>
                </View>

                <View style={styles.wrapItemDetails}>
                    <Text style={styles.textItem}>Delivery fees</Text>
                    <Text style={styles.textItem}>$1.5</Text>
                </View>

                <View style={styles.wrapItemDetails}>
                    <Text style={styles.texTotal}>Total:</Text>
                    <Text style={styles.texTotal}>$18.19</Text>
                </View>

                <View style={styles.wrapItemDetails}>
                    <Text style={styles.textDeliveryTime}>Estimated delivery time:</Text>
                    <Text style={styles.textDeliveryTime} >15 - 30mins</Text>
                </View>
            </View>

            <Text style={styles.textPayment}>Payment methods</Text>

            <View>
                <FlatList data={cardPayment} keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ rowGap: 15 }}
                    renderItem={({ item }) => {
                        return (
                            <CreditCard flagImage={item.flagImage} typeCard={item.typeCard} numberCard={item.number}
                                active={item.id === checkBox} onPress={() => handleSelectPayment(item.id)} />
                        )
                    }} />
            </View>

            <View style={styles.menu} >
                <View  >
                    <Text style={styles.textTotal} >Total Price</Text>
                    <Text style={styles.cifra} >$ <Text style={styles.price} >16.49</Text></Text>
                </View>

                <TouchableOpacity style={styles.buttonOrder}  ><Text style={styles.textOrderNow} onPress={() => navigate("Confirmation")} >Pay Now</Text></TouchableOpacity>
            </View>

        </View>
    )
}