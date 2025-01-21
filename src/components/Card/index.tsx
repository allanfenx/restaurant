import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

type CardType = TouchableOpacityProps & {
    image: any;
    title: string;
    type: string
}

export function Card({ image, title, type, ...rest }: CardType) {
    return (
        <TouchableOpacity {...rest} >
            <View style={styles.content} >
                <View style={{ alignItems: "center" }} >
                    <Image source={image} resizeMode="contain" style={styles.image} />
                </View>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.type} >{type}</Text>
                <View style={styles.contentItem} >
                    <View style={styles.star}>
                        <Ionicons name="star" size={16} color="#FF9633" />
                        <Text style={styles.ratio} >4.9</Text>
                    </View>
                    <Octicons name="heart" size={20} color={colors.RED} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        width: 165,
        height: 205,
        boxShadow: "rgba(0,0,0,0.1) 0 1px 10px",
        borderRadius: 20
    },
    image: {
        marginTop: 5,
        width: 100,
        height: 100
    },
    title: {
        marginLeft: 11,
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.robot_semi_bold
    },
    type: {
        marginLeft: 11,
        color: colors.BLACK,
        fontFamily: fonts.roboto,
        fontSize: 16
    },
    contentItem: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        justifyContent: "space-between",
        paddingHorizontal: 11
    },
    star: {
        alignItems: "center",
        marginTop: 9,
        paddingBottom: 15,
        flexDirection: "row",
        gap: 5
    },
    ratio: {
        fontFamily: fonts.roboto,
        fontSize: 16,
        color: colors.BLACK
    }

})