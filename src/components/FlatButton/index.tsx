import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";


type FlatButtonType = TouchableOpacityProps & {
    title: string;
    active: boolean;
}

export function FlatButon({ title, active = false, ...rest }: FlatButtonType) {

    return (
        <TouchableOpacity style={active ? styles.buttonActive : styles.button} {...rest} >
            <Text style={active ? styles.textActive : styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 110,
        height: 50,
        backgroundColor: colors.GRAY200,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonActive: {
        width: 110,
        height: 50,
        backgroundColor: colors.RED,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        width: 70,
        textAlign: "center",
        color: colors.GRAY500,
        fontFamily: fonts.inter,
        fontWeight: "500",
        fontSize: 16
    },
    textActive: {
        width: 70,
        textAlign: "center",
        color: colors.WHITE,
        fontFamily: fonts.inter,
        fontWeight: "500",
        fontSize: 16
    }
})