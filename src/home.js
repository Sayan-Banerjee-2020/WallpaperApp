import React, { useState, useEffect, useTransition } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Dimensions,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    FlatListComponent
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


const Home = () => {

    const navigation = useNavigation();


    const imgData = [
        {
            img: "https://i.pinimg.com/736x/73/22/fd/7322fd490690fc770eea9f1bfc3fce8b.jpg",

            id: 1,
        },
        {
            img: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",

            id: 2,
        },
        {
            img: "https://images.pexels.com/photos/4090599/pexels-photo-4090599.jpeg?cs=srgb&dl=pexels-og-mpango-4090599.jpg&fm=jpg",

            id: 3,
        },
        {
            img: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg",

            id: 4,
        },
        {
            img: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg",

            id: 5,
        },
        {
            img: "https://i0.wp.com/techwek.com/wp-content/uploads/2021/01/wallpaper-gotas-de-chuva.jpg",

            id: 6,
        },
        {
            img: "https://w0.peakpx.com/wallpaper/300/911/HD-wallpaper-dark-vertical-black.jpg",

            id: 7,
        },
        {
            img: "https://wallpapers.com/images/featured/4k-phone-ps7xz3jfe8x4zpje.jpg",

            id: 8,
        },
        {
            img: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",

            id: 9,
        },
        {
            img: "https://cdn.wallpapersafari.com/21/83/p7NJPD.jpg",

            id: 10,
        },
    ];

    const handleSetWallpaper = (item) => {
        navigation.navigate("imageDetails", { item });
    }

    const handleImageView = (item) => {
        return (
            <View style={Styles.ChildMainContainer}>
                <TouchableOpacity style={Styles.ChildTouchableContainer} onPress={() => handleSetWallpaper(item)}>
                    <Image style={Styles.Image} resizeMode={'stretch'} source={{ uri: item.img }} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={Styles.MainContainer}>
            <StatusBar backgroundColor={'#000'} translucent={false} barStyle="light-content" />
            <FlatList
                data={imgData}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={Styles.FlatListOwn}
                contentContainerStyle={Styles.FlatListContainer}
                renderItem={({ item }) => handleImageView(item)}
            />
        </View>
    );
};
export default Home;

const Styles = StyleSheet.create({
    MainContainer: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: "center",
        justifyContent: "center",
    },
    FlatListContainer: {
        flexDirection: "column",
        maxWidth: "100%",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 5
    },
    FlatListOwn: {
        alignSelf: "stretch",
        width: deviceWidth, flex: 1
    },
    ChildMainContainer: {
        backgroundColor: "#f0f0f0",
        height: deviceHeight / 3,
        width: deviceWidth / 2.1,
        justifyContent: "center",
        marginBottom: 2,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
        elevation: 2,
        marginRight: 2.5
    },
    ChildTouchableContainer: {
        height: deviceHeight / 3.2,
        width: deviceWidth / 2.3,
        alignItems: "center",
        elevation: 2,
        backgroundColor: "grey"
    },
    Image: {
        height: '100%',
        width: '100%'
    },
})