import React, {useState,} from 'react'
import {View,Text,StyleSheet,ScrollView,ImageBackground} from 'react-native'
import SearchBar from '../components/searchBar'
import ResultList from '../components/resultList'
import useResult from '../hooks/useResult'


const searchScreen = ()=> {
    const [term,setTerm] = useState('') 
    const [searchApi,err,result] = useResult()
    console.log(result)
    
    const filterPrice = (price) => {
        return result.filter(results => {
           return results.price === price 
        })
    }

    const image = {uri : 'https://www.wallpapertip.com/wmimgs/206-2061930_wallpaper-abstrak-keren.jpg'}

    return <View style = {style.background}>
    <ImageBackground source={image} resizeMode= 'cover' style = {style.image}> 
    <SearchBar 
    term = {term} 
    onTermChange = {setTerm}
    onTermSubmit = {() => searchApi(term)}
     />
        {err ? <Text>{err}</Text> : null}
    <ScrollView>
         <ResultList title='Cost Effective' apiResult={filterPrice('$')} />
        <ResultList title= 'Bit Pricer' apiResult={filterPrice('$$')} />
        <ResultList title = 'Big Spander' apiResult={filterPrice('$$$')} />
    </ScrollView>
      </ImageBackground>
    </View>
    
    
    
}

const style = StyleSheet.create({
    background : {
     backgroundColor : 'white',
        height : 750,
        flex : 1,
    },
    image : {
        flex : 1,
        justifyContent : 'center'
    }
})

export default searchScreen