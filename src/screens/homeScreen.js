import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearcBar from '../components/searchBar';
import yelp from '../api/yelp';

const HomeScreen = (searchTerm) => {
    const [term, setTerm] = useState('');
    const [restauarants, setRestauarants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setRestauarants(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    return (
        <View >
            <SearcBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage? <Text>{errorMessage}</Text> : null}
            <Text>We have found {restauarants.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default HomeScreen;