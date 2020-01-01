import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearcBar from '../components/searchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/restaurantLists';

const HomeScreen = (searchTerm) => {
    const [term, setTerm] = useState('');
    const [errorMessage, results, searchApi] = useRestaurants();

    const filterResultsByPrice=(price) =>{
        return results.filter(result =>{
            return result.price === price;
        })
    }


    return (
        <View >
            <SearcBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length}</Text>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
            <ResultsList results={filterResultsByPrice('$$')}title='Bit Pricier'/>
            <ResultsList results={filterResultsByPrice('$$$')}title='Big Spender'/>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default HomeScreen;