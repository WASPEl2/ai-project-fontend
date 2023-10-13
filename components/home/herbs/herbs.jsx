import React from "react";
import { View, Text, SafeAreaView, FlatList, ActivityIndicator, Image } from "react-native";
import styles from "./herbs.style";
import { useRouter } from "expo-router";
import HistoryCard from "../../common/cards/herbCard/herbCard";
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import HerbCard from "../../common/cards/herbCard/herbCard";

const Herbs = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch('all');

    const handleCardPress = (id) => {
    router.push(`/herbs-details/${id}`);
    };

    // Function to group data into pairs
    const groupDataIntoPairs = (data) => {
        const pairedData = [];
        for (let i = 0; i < data.length; i += 2) {
            const pair = [data[i]];
            if (i + 1 < data.length) {
                pair.push(data[i + 1]);
            }
            pairedData.push(pair);
        }
        return pairedData;
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.white} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={groupDataIntoPairs(data)}
                        keyExtractor={(item) => item[0].herb_id.toString()} // Use a unique identifier (herb_id) as the key
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'center', columnGap: 5, marginTop: 14 }}>
                                {item.map((subItem, subIndex) => (
                                    <HerbCard
                                        key={subItem.herb_id.toString()} // Use herb_id as the key
                                        id={subItem.herb_id}
                                        img={subItem.herb_image}
                                        name={subItem.herb_th_name}
                                        handleCardPress={() => handleCardPress(subItem.herb_id.toString())}
                                    />
                                ))}
                            </View>
                        )}
                    />

                )}
            </View>
        </View>
    );
}

export default Herbs;
