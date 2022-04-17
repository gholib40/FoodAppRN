import React from 'react'
import {View,Text,StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons';

const searchBar = ({term , onTermChange, onTermSubmit})=> {
    return <View style = {style.background}>
    <Feather name="search" size={35} color="black" style = {style.iconStyle}/>
    <TextInput
    style = {style.inputStyle}
    placeholder='Search'
    value={term}
    onChangeText = {onTermChange}
    onEndEditing = {onTermSubmit}
     />

    </View>
}

const style = StyleSheet.create({
    background : {
        marginTop : 15,
        backgroundColor : `#F0EEEE`,
        height : 50,
        borderRadius : 5,
        marginHorizontal : 15,
        flexDirection : 'row',
        marginBottom : 10
    },
    inputStyle : {
        flex : 1,
        fontSize : 18
    },
    iconStyle : {
        fontSize : 35,
        alignSelf : 'center',
        marginHorizontal : 15
    }
})

export default searchBar