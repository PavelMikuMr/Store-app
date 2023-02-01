import axios from 'axios'

const url = 'https://api.sampleapis.com/futurama/info'

const instance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' }
})
