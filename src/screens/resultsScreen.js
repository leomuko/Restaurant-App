import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultScreen = ({ navigation }) => {
    const [iresult, isetResult] = useState(null);
    const id = navigation.getParam('id');
    

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        isetResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!iresult) {
        return null;
    }

    return (
        <View>
            <Text>{iresult.name}</Text>
            <FlatList
                data= {iresult.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) =>{
                    return <Image source={{uri: item}} style={styles.image} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300


    }
});

export default ResultScreen;
