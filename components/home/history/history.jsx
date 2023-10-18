import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";

import styles from "./history.style";
import HistoryCard from "../../common/cards/historyCard/historyCard"
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch"
import { useNavigation } from "@react-navigation/native";

const History = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const [classificationHistory, setClassificationHistory] = useState([]);

    const loadHistoryFromStorage = async () => {
        try {
            const storedHistory = await AsyncStorage.getItem('classificationHistory');
            if (storedHistory) {
                return JSON.parse(storedHistory);
            }
            return null;
        } catch (error) {
            setError(true);
            console.error('Error loading history from storage:', error);
            return null;
        }
    };

    const refetchData = async () => {
        // Perform the refetch action here
        setIsLoading(true);
        setError(false);

        const historyFromStorage = await loadHistoryFromStorage();

        if (historyFromStorage) {
            setClassificationHistory(historyFromStorage);
        } else{
            setClassificationHistory(null)
        }

        setIsLoading(false);
    };

    useEffect(() => {
        refetchData();
    }, []);

    const clearHistory = async () => {
        try {
            await AsyncStorage.clear();
            refetchData();
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    }

    const handleCardPress = (data, image) => {
        navigation.navigate("result", {
            responseData: data,
            image: image,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>History</Text>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={clearHistory}>
                        <Text style={styles.headerBtn}>clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={refetchData}>
                        <Text style={styles.headerBtn}>refetch</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
            <View style={styles.cardContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.white} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={classificationHistory}
                        renderItem={({ item }) => (
                            <HistoryCard
                                img={item.imageUri}
                                responseData={item.responseData}
                                handleCardPress={handleCardPress}
                            />
                        )}

                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{
                            columnGap: 26,
                            marginTop: 4,
                            paddingLeft: 70,
                            paddingRight: 16,
                        }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                )}
            </View>
        </View >
    )
}

export default History;
