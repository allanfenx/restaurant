import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

type IputProps = TextInputProps & {
    text: string;
    width: number;
}

export function Input({ text, width, ...rest }: IputProps) {
    return (
        <View style={styles.wrapTextInput} >
            <Text style={[styles.label, { width }]} >{text}</Text>
            <TextInput style={styles.textInput} cursorColor={colors.WHITE} {...rest} />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapTextInput: {
        width: "100%",
        height: 60,
        borderWidth: 1,
        borderColor: colors.GRAY80,
        borderRadius: 20
    },
    label: {
        textAlign: "center",
        fontFamily: fonts.roboto,
        fontSize: 16,
        color: colors.GRAY80,
        marginTop: -12,
        marginLeft: 30,
        backgroundColor: colors.WHITE,
    },
    textInput: {
        width: "100%",
        height: 71,
        fontFamily: fonts.robot_semi_bold,
        fontSize: 14,
        color: colors.BLACK,
        marginLeft: 25
    }
})