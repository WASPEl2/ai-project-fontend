import react, { useEffect, useState } from "react";
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


    const [classificationHistory, setClassificationHistory] = useState([]); // Initialize classificationHistory state
    const { data, isLoading, error } = useFetch('history');

    const loadHistoryFromStorage = async () => {
        try {
            const storedHistory = await AsyncStorage.getItem('classificationHistory');
            if (storedHistory) {
            return JSON.parse(storedHistory);
            }
            return null; // Return null if no history is found
        } catch (error) {
            console.error('Error loading history from storage:', error);
            return null;
        }
    };

    // Load history from AsyncStorage on component mount
    useEffect(() => {
        const loadHistory = async () => {
            const historyFromStorage = await loadHistoryFromStorage();

            if (historyFromStorage) {
                setClassificationHistory(historyFromStorage);
            }
        };
        loadHistory();
    }, []);

    const handleCardPress = (data,image) => {
    navigation.navigate("result", {
            responseData: data,
            image: image,
          });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}> 
                <Text style={styles.headerText}>History</Text>
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
                    
                    keyExtractor={(item, index) =>  index.toString()}
                    contentContainerStyle={{
                            columnGap: 26,
                            // ...Platform.select({
                            //     android: {
                            //         paddingLeft: 70,
                            //         paddingRight: 16,
                            //     },
                            // }),
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