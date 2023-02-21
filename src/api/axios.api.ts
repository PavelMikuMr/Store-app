import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://63dd2619367aa5a7a40a161a.mockapi.io',
  headers: { 'Content-Type': 'application/json' }
})
