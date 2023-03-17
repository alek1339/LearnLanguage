
import axios from 'axios'

interface IToken {
  token: string
}

const setAuthToken = (token: any) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken