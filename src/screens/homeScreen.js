import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearcBar from '../components/searchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/restaurantLists';

const HomeScreen = () => {
    const [term, setTerm] = useState('');
    const [errorMessage, results, searchApi] = useRestaurants();

    const filterResultsByPrice=(price) =>{
        return results.filter(result =>{
            return result.price === price;
        })
    }


    return (
        <>
            <SearcBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage? <Text>{errorMessage}</Text> : null} 
            <ScrollView>
            
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
            <ResultsList results={filterResultsByPrice('$$')}title='Bit Pricier' />
            <ResultsList results={filterResultsByPrice('$$$')}title='Big Spender'/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

});

export default HomeScreen;