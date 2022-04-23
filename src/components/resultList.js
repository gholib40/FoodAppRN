import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultDetail from './ResultDetail'
import {withNavigation} from 'react-navigation'


const resultList = ({title, apiResult, navigation}) => {
    if(!apiResult.length){
        return null
    }
    return <View style = {style.container}>
        <Text style = {style.title}>{title}</Text>
        <FlatList 
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        data = {apiResult}
        keyExtractor = {item => item.id}
        renderItem = {({item}) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id : item.id})}>
                <ResultDetail props={item} />
                </TouchableOpacity>
            ) 
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


export default withNavigation(resultList)