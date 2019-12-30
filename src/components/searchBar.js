import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearcBar = () =>{
    return(
        <View style={styles.searchBar}>
            <Feather name='search'
                style={styles.iconStyle}
            />
            <TextInput
            style={styles.input}
            placeholder="Search"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar:{
        marginTop: 10,
        backgroundColor:'#F0EEEE',
        margin : 10,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    input: {
        fontSize: 15,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearcBar;