import react from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./welcome.style";
import { COLORS, icons, images } from "../../../constants";

const Welcome = (searchTerm, setSearchTerm, handleClick) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleposition}>
                <Image
                    source={images.isthatherb}
                    resizeMode='contain'
                />
            </View>
            {/* search function */}
            {/* <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                
                    <TextInput
                        style={styles.searchInput}
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                        placeholder='search'
                        placeholderTextColor={COLORS.white}
                    />
                </View>
            </View> */}
        </View>
    )
}

export default Welcome;