import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import miniPlus from "../../assets/mini_plus.png";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

type OptionsType = {
    title: string;
    image: ImageProps;

}


export function Options({ title, image }: OptionsType) {

    return (
        <TouchableOpacity>
            <View style={styles.container} >
                <View style={styles.wrap}>
                    <Image source={image} resizeMode="contain" />
                </View>
                <View style={styles.footerConatiner} >
                    <Text style={styles.text} >{title}</Text>
                    <Image source={miniPlus} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 99,
        width: 84,
        borderRadius: 30
    },
    wrap: {
        width: 84,
        height: 61,
        backgroundColor: colors.WHITE,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        position: "absolute",
        zIndex: 5
    },
    footerConatiner: {
        height: 60,
        width: 84,
        backgroundColor: colors.BLACK,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
        paddingHorizontal: 8
    },
    text: {
        fontFamily: fonts.roboto,
        fontSize: 12,
        color: colors.WHITE
    }
})