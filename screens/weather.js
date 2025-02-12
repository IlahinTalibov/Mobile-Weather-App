import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import * as Location from 'expo-location';

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null);

    const fetchWeatherData = async () => {
        setLoading(true);
        setError(null);  // Reset error state on new fetch

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setError('Location permission denied');
            setLoading(false);
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        fetch(`https://api.weatherapi.com/v1/current.json?key=85546c2eb56440e3923130959250902&q=${latitude},${longitude}`)
            .then(response => response.json())
            .then(data => {
                console.log("Weather Data:", data);
                setWeatherData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("API Error:", error);
                setError(error);
                setLoading(false);
            });
    };

    return (
        <View style={styles.container}>
            <Button title="Get Weather" onPress={fetchWeatherData} />

            {loading && <ActivityIndicator size="large" color="#0000ff" />}

            {error && <Text>Error: {error.message || error}</Text>}

            {weatherData && !loading && !error && (
                <View style={styles.weatherInfo}>
                    <Text>Location: {weatherData?.location?.name}, {weatherData?.location?.country}</Text>
                    <Text>Temperature: {weatherData?.current?.temp_c}°C</Text>
                    <Text>Condition: {weatherData?.current?.condition?.text}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    weatherInfo: {
        marginTop: 20,
        alignItems: 'center',
    },
});
