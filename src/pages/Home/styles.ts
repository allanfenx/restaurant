import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";




export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: "column-reverse"
    },
    wrap: {
        paddingHorizontal: 10,
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 28,
        height: 55
    },
    tttle: {
        fontFamily: fonts.title,
        fontWeight: "400",
        fontSize: 45,
        color: colors.BLACK
    },
    subTitle: {
        color: colors.subTitle,
        fontFamily: fonts.subTitle,
        fontWeight: "500",
        fontSize: 18
    },
    searchContainer: {
        marginTop: 30,
        gap: 13,
        flexDirection: "row",
        height: 60,
    },
    search: {
        paddingLeft: 20,
        gap: 14,
        width: "78%",
        flexDirection: "row",
        alignItems: "center",
        borderColor: colors.WHITE,
        borderWidth: 1,
        borderRadius: 20,
        boxShadow: "rgba(0,0,0,0.1) 0 1px 10px"
    },
    searchInput: {
        width: 200,
        height: 60,
        fontFamily: fonts.roboto,
        fontWeight: "500",
        fontSize: 18,
        color: colors.BLACK,
    },
    optionsSearch: {
        backgroundColor: colors.RED,
        justifyContent: "center",
        paddingHorizontal: 18,
        width: 60,
        height: 60,
        borderRadius: 20
    },
    contentItem: {
        alignItems: "center",
        rowGap: 10,
        gap: 30,
        paddingBottom: 90
    },
    footer: {
        width: "100%",
        height: 80,
        backgroundColor: colors.RED,
        marginTop: 'auto',
        position: "absolute",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
    },
})