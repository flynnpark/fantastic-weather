import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a crying",
        subtitle: "For more info look outside",
        icon: "ios-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny as a glass",
        subtitle: "Go outside now!",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, too boring",
        icon: "ios-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Snowing",
        subtitle: "Do you want to build a snowman?",
        icon: "ios-snow"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain",
        icon: "ios-rainy-outline"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what thet is",
        icon: "ios-rainy-outline"
    },
}

function Weather({ weatherName, temp }) {
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <StatusBar hidden={true} />
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    weatherName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        fontWeight: "200"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 120
    }
});
