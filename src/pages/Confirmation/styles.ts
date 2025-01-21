import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.GRAY500,
        alignItems: "center",
        justifyContent: "center"
    },
    alertCard: {
        width: 320,
        height: 380,
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        alignItems: "center"
    },
    textSuccess: {
        marginTop: 28,
        fontFamily: fonts.poppins_semi_bold,
        fontSize: 30,
        color: colors.RED
    },
    text: {
        marginTop: 6,
        width: 199,
        height: 66,
        fontFamily: fonts.roboto,
        fontSize: 14,
        color: colors.GRAY500,
        textAlign: "center"
    },
    button: {
        marginTop: 35,
        width: 220,
        height: 60,
        backgroundColor: colors.RED,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    textButton: {
        fontFamily: fonts.robot_semi_bold,
        fontSize: 18,
        color: colors.WHITE
    }
})