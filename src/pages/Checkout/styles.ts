import { Button, Dimensions, Platform, StatusBar, StyleSheet, TextStyle, ViewStyle } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

const width = Dimensions.get("window").width;

function responsiveFooter() {

    var menu = { flexDirection: "row", marginTop: "auto", paddingBottom: 35 } as ViewStyle;
    var textTotal = { fontFamily: fonts.robot_semi_bold, fontSize: 18, color: colors.BLACK } as TextStyle;
    var cifra = { fontFamily: fonts.robot_semi_bold, color: colors.RED, fontSize: 30 } as TextStyle;
    var price = { fontFamily: fonts.robot_semi_bold, fontSize: 36, color: colors.BLACK } as TextStyle;
    var buttonOrder = { width: 200, height: 70, backgroundColor: colors.RED, borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 40 } as ViewStyle;
    var textOrderNow = { color: colors.WHITE, fontFamily: fonts.robot_semi_bold, fontSize: 18 } as TextStyle;


    switch (true) {
        case width <= 360:
            menu = { flexDirection: "row", marginTop: "auto", paddingBottom: 10 };
            textTotal = { fontFamily: fonts.robot_semi_bold, fontSize: 16, color: colors.BLACK };
            cifra = { fontFamily: fonts.robot_semi_bold, color: colors.RED, fontSize: 24 };
            price = { fontFamily: fonts.robot_semi_bold, fontSize: 24, color: colors.BLACK };
            buttonOrder = { width: 150, height: 60, backgroundColor: colors.RED, borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 75 };
            textOrderNow = { color: colors.WHITE, fontFamily: fonts.robot_semi_bold, fontSize: 15 };
            break;

        case width >= 411:
            menu = { flexDirection: "row", marginTop: "auto", paddingBottom: 35 }
            textTotal = { fontFamily: fonts.robot_semi_bold, fontSize: 18, color: colors.BLACK }
            cifra = { fontFamily: fonts.robot_semi_bold, color: colors.RED, fontSize: 30 }
            price = { fontFamily: fonts.robot_semi_bold, fontSize: 36, color: colors.BLACK }
            buttonOrder = { width: 200, height: 70, backgroundColor: colors.RED, borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 60 }
            textOrderNow = { color: colors.WHITE, fontFamily: fonts.robot_semi_bold, fontSize: 18 }
            break;
    }

    return { menu, textTotal, cifra, price, buttonOrder, textOrderNow };
}

const { menu, textTotal, cifra, price, buttonOrder, textOrderNow } = responsiveFooter()

export const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        paddingHorizontal: 11,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    header: {
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    contentCheckout: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 11
    },
    image: {
        height: 200,
        width: 150,
        marginLeft: -30,
    },
    customize: {
        fontFamily: fonts.robot_semi_bold,
        fontSize: 14,
        color: colors.BLACK
    },
    customizeText: {
        fontFamily: fonts.roboto,
        fontSize: 12,
        color: colors.BLACK
    },
    portion: {
        marginTop: 70,
        fontFamily: fonts.robot_semi_bold,
        fontSize: 14,
        color: colors.BLACK
    },
    menuOrder: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        columnGap: 28
    },
    buttonPlusAndMinus: {
        backgroundColor: colors.RED,
        borderRadius: 10,
    },
    numberOrder: {
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: fonts.inter,
        fontSize: 18
    },
    topping: {
        marginTop: 20,
        fontFamily: fonts.robot_semi_bold,
        fontSize: 18
    },
    menu,
    textTotal,
    cifra,
    price,
    buttonOrder,
    textOrderNow
})
