import axios from 'axios';

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'http://127.0.0.1:8000/news/',
        'headers':{
            "content-type": "application/json",
         /*    "Access-Control-Allow-Origin": "GET", */
            Accept : "application/json"

        },
        /* 'mode': "cors",  */
       /*  'params': {
            'search':'parameter', */
        
    })
}