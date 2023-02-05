import axios from 'axios';

const SearchImage = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID NPMeUefbppUpySEdeQPDnuk5VKJqQIxcAeeDoFYyI4M'
        },
        params:{
            query: term,
        }
    });
    console.log(response);
    return response.data.results;
}

export default SearchImage;