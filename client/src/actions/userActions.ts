import axios from 'axios';

export const updateUser = (userData: any) => {

  axios.put('/profile/update', userData)
    .then(res => console.log(res))
}