import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

const height = Dimensions.get("window").height;


function henderMenuMinusAndPlus() {

    let value = 80;

    if (height < 706) {
        value = 10
    }

    return value;
}

const result = henderMenuMinusAndPlus();

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 11,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: 34
    },
    header: {
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    containerImage: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 29
    },
    image: {
        width: 250,
        height: 255
    },
    containerTitle: {
        width: "100%",
        flexDirection: "row"
    },
    title: {
        marginRight: 5,
        fontFamily: fonts.robot_semi_bold,
        fontSize: 20
    },
    ratio: {
        marginTop: 5,
        alignItems: "center",
        flexDirection: "row",
        columnGap: 10
    },
    nota: {
        fontFamily: fonts.roboto,
        fontSize: 16
    },
    description: {
        marginTop: 20,
        fontFamily: fonts.text,
        fontSize: 16
    },
    wrapMenu: {
        marginBottom: "auto",
        paddingTop: result
    },
    portion: {
        textAlign: "right",
        paddingRight: 70,
        fontFamily: fonts.roboto,
        fontSize: 14
    },
    menuOrder: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 1,
        columnGap: 14
    },
    buttonOrder: {
        backgroundColor: colors.RED,
        borderRadius: 10,
    },
    numberOrder: {
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: fonts.inter,
        fontSize: 18
    },
    footer: {
        marginTop: "auto",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    price: {
        backgroundColor: colors.RED,
        width: 84,
        height: 60,
        borderRadius: 20,
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: fonts.robot_semi_bold,
        fontSize: 22,
        color: colors.WHITE
    },
    orderNow: {
        backgroundColor: colors.BLACK,
        width: 200,
        height: 60,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    textOrderNow: {
        textAlign: "center",
        textAlignVertical: "center",
        color: colors.WHITE
    }
})