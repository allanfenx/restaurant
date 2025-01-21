import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

type CreditCardType = TouchableOpacityProps & {
    flagImage: ImageProps;
    typeCard: string;
    numberCard: string;
    active: boolean;
}


export function CreditCard({ flagImage, typeCard, numberCard, active, ...rest }: CreditCardType) {
    return (
        <TouchableOpacity style={active ? styles.paymentCardActive : styles.paymentCard} activeOpacity={1} {...rest} >
            <Image source={flagImage} />
            <View style={{ rowGap: 10 }} >
                <Text style={active ? styles.textTypePaymentActive : styles.textTypePayment} >{typeCard}</Text>
                <Text style={active ? styles.numberCardActive : styles.numberCard} >{numberCard}</Text>
            </View>
            {active ? <MaterialCommunityIcons name="radiobox-marked" size={20} color={colors.WHITE} /> : <MaterialCommunityIcons name="radiobox-blank" size={20} />}

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    paymentCard: {
        width: "100%",
        zIndex: 5,
        height: 80,
        flexDirection: "row",
        backgroundColor: colors.GRAY200,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 19
    },
    paymentCardActive: {
        width: "100%",
        zIndex: 5,
        height: 80,
        flexDirection: "row",
        backgroundColor: colors.BLACK,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 19
    },
    textTypePayment: {
        fontFamily: fonts.roboto,
        fontSize: 14,
        color: colors.BLACK
    },
    textTypePaymentActive: {
        fontFamily: fonts.roboto,
        fontSize: 14,
        color: colors.WHITE
    },
    numberCard: {
        fontFamily: fonts.roboto,
        fontSize: 14,
        color: colors.GRAY500
    },
    numberCardActive: {
        fontFamily: fonts.roboto,
        fontSize: 14,
        color: colors.WHITE
    }
})