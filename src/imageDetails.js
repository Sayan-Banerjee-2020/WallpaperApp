import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { useRoute } from "@react-navigation/native";
import { setWallpaper, TYPE_SCREEN } from 'rn-wallpapers';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const ImageDetails = () => {
    const route = useRoute();
    const item = route.params.item;

    const setYourWallpaper = async (screen) => {
        if (screen == "HOME") {
            await setWallpaper(
                {
                    uri: `${item.img}`,
                    headers: {}
                },
                TYPE_SCREEN.HOME
            );
        }
        if (screen == "LOCK") {
            await setWallpaper(
                {
                    uri: `${item.img}`,
                    headers: {}
                },
                TYPE_SCREEN.LOCK
            );
        }
        if (screen == "BOTH") {
            await setWallpaper(
                {
                    uri: `${item.img}`,
                    headers: {}
                },
                TYPE_SCREEN.BOTH
            );
        }
    }

    return (
        <ImageBackground source={{ uri: item.img }} style={styles.ImageBackground}>
            <View style={styles.OptionContainer}>
                <Text style={styles.headerText}>Set Wallpaper</Text>
                <TouchableOpacity
                    onPress={() => {
                        setYourWallpaper("HOME");
                    }}
                    style={[styles.wallpaperOption, {}]}
                >
                    <Text style={styles.whiteText}>Home Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setYourWallpaper("LOCK")}
                    style={[styles.wallpaperOption, {}]}
                >
                    <Text style={styles.whiteText}>Lock Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setYourWallpaper("BOTH")}
                    style={[styles.wallpaperOption, {}]}
                >
                    <Text style={styles.whiteText}>Both</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
export default ImageDetails;

const styles = StyleSheet.create({
    ImageBackground: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: "center",
        justifyContent: "center"
    },
    OptionContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: deviceWidth / 1.8,
        borderRadius: 10,
        padding: 10,
        position: 'absolute',
        bottom: 0
    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    whiteText: {
        color: "white",
        fontSize: 15,
        marginLeft: 10,
    },
    wallpaperOption: {
        height: deviceHeight / 16,
        width: deviceWidth / 3,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 360,
    },
});