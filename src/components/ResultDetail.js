import React from 'react'   
import {View,StyleSheet,Text, Image,} from 'react-native'


const ResultDetail = ({props})=>{
    return <View style = {style.container}>
        <Image style = {style.image} source={{uri: props.image_url}} />
        <Text style = {style.text}>{props.name}</Text>
        <Text>{props.rating} Stars, {props.review_count} Reviews</Text>
        
    </View>
}

const style = StyleSheet.create({
    image : {
        width : 200,
        borderRadius : 4,
        height : 200,
        marginBottom : 5

    },
    text: {
        fontWeight : 'bold',
    },
    container : {
        marginLeft : 15
    }
})


export default ResultDetail