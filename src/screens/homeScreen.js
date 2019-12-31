import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearcBar from '../components/searchBar';


const HomeScreen = () => {
    const [term, setTerm] = useState('')
    return (
        <View >
            <SearcBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
            />
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default HomeScreen;