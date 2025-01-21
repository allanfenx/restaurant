import { Dimensions, Platform, StatusBar, StyleSheet, TextStyle, ViewStyle } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";


const width = Dimensions.get("window").width;

function responsiveFooter() {

    var menu = { flexDirection: "row", marginTop: "auto", paddingBottom: 35, justifyContent: "space-between" } as ViewStyle;
    var textTotal = { fontFamily: fonts.roboto, fontSize: 16, color: colors.GRAY500 } as TextStyle;
    var cifra = { fontFamily: fonts.robot_semi_bold, color: colors.RED, fontSize: 24 } as TextStyle;
    var price = { fontFamily: fonts.robot_semi_bold, fontSize: 36, color: colors.BLACK } as TextStyle;
    var buttonOrder = { width: 200, height: 70, backgroundColor: colors.BLACK, borderRadius: 20, alignItems: "center", justifyContent: "center" } as ViewStyle;
    var textOrderNow = { color: colors.WHITE, fontFamily: fonts.robot_semi_bold, fontSize: 18 } as TextStyle;


    switch (true) {
        case width <= 360:
            menu = { flexDirection: "row", marginTop: "auto", paddingBottom: 10, justifyContent: "space-between" };
            textTotal = { fontFamily: fonts.roboto, fontSize: 16, color: colors.GRAY500 };
            cifra = { fontFamily: fonts.robot_semi_bold, color: colors.RED, fontSize: 24 };
            price = { fontFamily: fonts.robot_semi_bold, fontSize: 24, color: colors.BLACK };
            buttonOrder = { width: 150, height: 60, backgroundColor: colors.BLACK, borderRadius: 20, alignItems: "center", justifyContent: "center" };
            textOrderNow = { color: colors.WHITE, fontFamily: fonts.robot_semi_bold, fontSize: 15 };
            break;

        case width >= 411:
            menu = { flexDirection: "row", marginTop: "auto", paddingBottom: 35, justifyContent: "space-between" }
            textTotal = { fontFamily: fonts.roboto, fontSize: 16, color: colors.GRAY500 };
            cifra = { fontFamily: fonts.robot_semi_bold, color: colors.RED, fontSize: 32 }
            price = { fontFamily: fonts.robot_semi_bold, fontSize: 36, color: colors.BLACK }
            buttonOrder = { width: 200, height: 70, backgroundColor: colors.BLACK, borderRadius: 20, alignItems: "center", justifyContent: "center" }
            textOrderNow = { color: colors.WHITE, fontFamily: fonts.robot_semi_bold, fontSize: 18 }
        default:
            menu;
            textTotal;
            cifra;
            price;
            buttonOrder;
            textOrderNow;
            break;
    }

    return { menu, textTotal, cifra, price, buttonOrder, textOrderNow };
}

const { menu, textTotal, cifra, price, buttonOrder, textOrderNow } = responsiveFooter()


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 19
    },
    header: {
        marginTop: 28,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textSumary: {
        fontFamily: fonts.poppins_semi_bold,
        fontSize: 20,
        color: colors.BLACK,
        marginTop: 31
    },
    details: {
        marginTop: 20,
        paddingHorizontal: 36,
        rowGap: 10,
    },
    wrapItemDetails: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textItem: {
        fontFamily: fonts.roboto,
        fontSize: 18,
        color: colors.GRAY300
    },
    texTotal: {
        marginTop: 12,
        fontFamily: fonts.robot_semi_bold,
        fontSize: 18,
        color: colors.BLACK
    },
    textDeliveryTime: {
        marginTop: 10,
        fontFamily: fonts.robot_semi_bold,
        fontSize: 14,
        color: colors.BLACK
    },
    textPayment: {
        marginTop: 20,
        marginBottom: 10,
        fontFamily: fonts.poppins_semi_bold,
        fontSize: 20,
        color: colors.BLACK
    },
    menu,
    textTotal,
    cifra,
    price,
    buttonOrder,
    textOrderNow,
})