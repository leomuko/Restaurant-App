import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const ResultScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/{id}`);
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ResultScreen;
