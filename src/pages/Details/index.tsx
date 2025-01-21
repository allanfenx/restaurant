import { Image, Text, TouchableOpacity, View } from "react-native";
import { Octicons, Entypo, Ionicons } from "@expo/vector-icons";
import cheeseburger from "../../assets/Cheeseburger.png";

import { styles } from "./styles";
import colors from "../../styles/colors";
import { useNavigation, useRoute } from "@react-navigation/native";

type ParamRouteType = {
    id: number;
}



export function Details() {

    const { id } = useRoute().params as ParamRouteType;

    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity style={{ zIndex: 5 }} onPress={() => goBack()}  >
                    <Octicons name="arrow-left" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ zIndex: 5 }}>
                    <Entypo name="log-out" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerImage} >
                <Image source={cheeseburger} style={styles.image} />
            </View>

            <View style={styles.containerTitle} >
                <Text style={styles.title} >Cheeseburger</Text>
                <Text style={styles.title}>Wendy's Burger</Text>
            </View>

            <View style={styles.ratio} >
                <Ionicons name="star" size={16} color="#FF9633" />
                <Text>4.9</Text>
            </View>

            <Text style={styles.description} >
                The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of
                flavor in every bite. Made with a juicy beef patty cooked to perfection,
                it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.
            </Text>

            <View style={styles.wrapMenu} >
                <Text style={styles.portion} >Portion</Text>
                <View style={styles.menuOrder} >
                    <Entypo name="minus" size={40} color={colors.WHITE} style={styles.buttonOrder} />
                    <Text style={styles.numberOrder} >1</Text>
                    <Entypo name="plus" size={40} color={colors.WHITE} style={styles.buttonOrder} />
                </View>
            </View>

            <View style={styles.footer} >
                <Text style={styles.price} >$8,24</Text>
                <TouchableOpacity style={styles.orderNow} onPress={() => navigate("Checkout")}  >
                    <Text style={styles.textOrderNow} >ORDER NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

