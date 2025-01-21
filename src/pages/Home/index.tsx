import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Ionicons, Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { buttonFlat, hanburguers } from "../../utils/data"
import { styles } from "./styles"
import colors from "../../styles/colors";

import perfil from "../../assets/perfil.png";
import sliders from "../../assets/sliders.png";
import { FlatButon } from "../../components/FlatButton";
import { Card } from "../../components/Card";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function Home() {

    const { navigate } = useNavigation()

    const [enviroment, setEnviroment] = useState("All")



    function handleSelectLauch(title: string) {

        switch (title) {
            case "All":
                setEnviroment("All")
                break;
            case "Combos":
                setEnviroment("Combos")
                break;
            case "Sliders":
                setEnviroment("Sliders")
                break;
            case "Classic":
                setEnviroment("Classic")
                break;
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.wrap} >

                <View style={styles.header}>
                    <Text style={styles.tttle} >Foodgo</Text>
                    <Image source={perfil} resizeMode="contain" />
                </View>
                <Text>Order your favourite food!</Text>

                <View style={styles.searchContainer}>
                    <View style={styles.search} >
                        <Ionicons name="search" size={24} color={colors.BLACK} />
                        <TextInput placeholder="Search" style={styles.searchInput} />
                    </View>
                    <View style={styles.optionsSearch} ><Image source={sliders} /></View>
                </View>


                <View style={{ marginBottom: 30, marginTop: 20 }}>
                    <FlatList data={buttonFlat} keyExtractor={item => String(item.id)}
                        contentContainerStyle={{ gap: 14, height: 50 }}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <FlatButon title={item.title} active={item.title === enviroment} onPress={() => handleSelectLauch(item.title)} />
                            )
                        }}
                        showsHorizontalScrollIndicator={false} />
                </View>

                <FlatList data={hanburguers} keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.contentItem}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ gap: "2%" }}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <Card image={item.image} title={item.title} type={item.type} onPress={() => navigate("Details", { id: item.id })} />
                        )
                    }}
                />
            </View>
            <View style={styles.footer} >
                <View style={{ width: "100%", height: 80, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 30 }}  >
                    <TouchableOpacity style={{ zIndex: 5 }} >
                        <Feather name="home" size={24} color={colors.WHITE} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ zIndex: 5 }} onPress={() => navigate("Perfil")} >
                        <AntDesign name="user" size={24} color={colors.WHITE} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ zIndex: 5 }} >
                        <MaterialCommunityIcons name="chat-processing-outline" size={24} color={colors.WHITE} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ zIndex: 5 }}>

                        <AntDesign name="heart" size={24} color={colors.WHITE} />
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}