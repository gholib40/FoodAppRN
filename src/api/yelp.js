import axios from 'axios'



export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer nF_Pdqgo78ZH8C1mPEEPkEy4YVbM-gejZiKEch07n-0jys80mXMU84eyMxGI03k74clbXctcWaDoW7U-Xw5BDzLTN5DjpOouMj6kixXlWJPUzJhemVWo913xkX1CYnYx'
    }
})