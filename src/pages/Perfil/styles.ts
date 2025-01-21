import { Dimensions, ImageStyle, Platform, StatusBar, StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const width = Dimensions.get("window").width;

function footerBottonResponsive() {

    let wrapButton = { width: "100%", justifyContent: "space-between", marginTop: "auto", paddingBottom: 25, flexDirection: "row", paddingHorizontal: 19 } as ViewStyle;
    let buttonEdit = { width: 160, height: 60, backgroundColor: colors.BLACK, borderRadius: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" } as ViewStyle
    let texButtonEdit = { fontFamily: fonts.roboto, fontSize: 18, color: colors.WHITE, marginRight: 15 } as TextStyle
    let buttonLogout = { width: 160, height: 60, backgroundColor: colors.WHITE, borderRadius: 20, flexDirection: "row", justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: colors.RED } as ViewStyle;
    let texButtonLogout = { fontFamily: fonts.roboto, fontSize: 18, color: colors.RED, marginRight: 15 } as TextStyle;


    switch (true) {
        case width <= 360:
            wrapButton = { width: "100%", justifyContent: "space-between", marginTop: "auto", paddingBottom: 20, flexDirection: "row", paddingHorizontal: 19 };
            buttonEdit = { width: 150, height: 60, backgroundColor: colors.BLACK, borderRadius: 15, flexDirection: "row", justifyContent: "center", alignItems: "center" };
            texButtonEdit = { fontFamily: fonts.roboto, fontSize: 15, color: colors.WHITE, marginRight: 15 };
            buttonLogout = { width: 150, height: 60, backgroundColor: colors.WHITE, borderRadius: 15, flexDirection: "row", justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: colors.RED };
            texButtonLogout = { fontFamily: fonts.roboto, fontSize: 15, color: colors.RED, marginRight: 15 };
            break;

        case width >= 411:
            wrapButton = { width: "100%", justifyContent: "space-between", marginTop: "auto", paddingBottom: 40, flexDirection: "row", paddingHorizontal: 19 };
            buttonEdit = { width: 170, height: 70, backgroundColor: colors.BLACK, borderRadius: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" };
            texButtonEdit = { fontFamily: fonts.roboto, fontSize: 18, color: colors.WHITE, marginRight: 15 };
            buttonLogout = { width: 170, height: 70, backgroundColor: colors.WHITE, borderRadius: 20, flexDirection: "row", justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: colors.RED };
            texButtonLogout = { fontFamily: fonts.roboto, fontSize: 18, color: colors.RED, marginRight: 15 };
            break;
    }

    return { wrapButton, buttonEdit, texButtonEdit, buttonLogout, texButtonLogout }
}

const { wrapButton, buttonEdit, texButtonEdit, buttonLogout, texButtonLogout } = footerBottonResponsive();


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
        marginTop: 26,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    secondContainer: {
        backgroundColor: colors.WHITE,
        flex: 1,
        marginTop: 90,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: colors.GRAY500,
        alignItems: "center",
        borderRadius: 20,
        marginTop: -70,
        borderWidth: 4,
        borderColor: colors.RED
    },
    wrapInput: {
        width: "100%",
        paddingHorizontal: 18,
        marginTop: 20,
        rowGap: 15
    },
    line: {
        marginTop: 20,
        width: "75%",
        borderBottomColor: colors.GRAY200,
        borderBottomWidth: 1,
    },
    text: {
        fontFamily: fonts.roboto,
        fontSize: 18,
        color: colors.GRAY80
    },
    wrapButton, buttonEdit, texButtonEdit, buttonLogout, texButtonLogout,
})