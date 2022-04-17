import { useEffect,useState } from 'react'
import yelp from '../api/yelp' 

export default () => {
    const [result,setResult] = useState([])
    const [err, setErr] = useState('')
    const searchApi = async (searhArguments)=>{
        try{
        const response = await yelp.get('/search', {
            params : {
                limit : 50,
                term : searhArguments,
                location: 'san jose'
            }
        })
        setResult(response.data.businesses)
    }catch (err) {
        setErr('aplikasi error')
    }
    }
    useEffect(() => {
        searchApi('pasta')
    },[])
    // searchApi('pasta')
    return [searchApi,err,result]
}