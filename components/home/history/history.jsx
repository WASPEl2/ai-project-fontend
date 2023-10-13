import react from "react";
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from "react-native";

import styles from "./history.style";
import { useRouter } from "expo-router";
import HistoryCard from "../../common/cards/historyCard/historyCard"
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch"

const History = () => {
    const router = useRouter();
    const {data ,isLoading ,error} =useFetch('history')

    const handleCardPress = (id) => {
    router.push(`/herbs-details/${id}`);
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
                    data={data}
                    renderItem={({ item }) => (
                    <HistoryCard
                        id={item.herb_id}
                        img={item.herb_image}
                        handleCardPress={() => handleCardPress(item.herb_id.toString())}
                    />
                    )}
                    keyExtractor={(item, index) => (item.herb_id ? item.herb_id.toString() : index.toString())}
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