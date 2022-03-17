const axios = require('axios');

export async function getData() {

    const response = await axios.get('https://random-data-api.com/api/users/random_user');
    return response.data;
}
