import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import ResultDetail from './ResultDetail'


const resultList = ({title, apiResult}) => {
    return <View style = {style.container}>
        <Text style = {style.title}>{title}</Text>
        <FlatList 
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        data = {apiResult}
        keyExtractor = {item => item.id}
        renderItem = {({item}) => {
            return <ResultDetail props={item} />
        }}
         />

    </View>
}

const style = StyleSheet.create({
    title : {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 15,
        marginBottom : 5
    },
    container : {
        marginBottom : 10
    }
})


export default resultList