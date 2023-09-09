import axios from 'axios'

export const fetchResults = async (url) => {
    let config = {
        method: 'get',
        url: `${import.meta.env.VITE_API_URL}/${url}`,
    };

    try {
        const { data } = await axios.request(config)
        return data

    } catch (err) {
        return []
    }

}