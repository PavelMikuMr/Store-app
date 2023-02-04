import { faAffiliatetheme } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'

interface DATA {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const Pizza = ({ ...props }) => {
  const FAKE_URL = 'https://fakestoreapi.comproducts'

  // const immediatelyResolvedPromise = (url: string) => {
  //   const resultPromise = new Promise((resolve, reject) => {
  //     resolve(fetch(url))
  //   })
  //   return resultPromise
  // }
  // immediatelyResolvedPromise(FAKE_URL)
  //   .then((data) => {
  //     console.log('data:', data)
  //   })
  //   .catch((error: any) => {
  //     console.log(error)
  //   })

  // const angelMowersPromise = new Promise<string>((res, rej) => {
  //   setTimeout(() => {
  //     res('we finished mowing the lawn')
  //   }, 1000)

  //   rej(new Error('we couldnt'))
  // })
  // const myPaymentPromise = new Promise<Record<string, number | string>>((res, rej) => {
  //   setTimeout(() => {
  //     res({ amount: 100, note: 'thanks' })
  //   }, 1000)
  //   rej(new Error('I don`t pay for this bulshit!'))
  // })

  // angelMowersPromise
  //   .then(() => myPaymentPromise.then((res) => console.log(res)))
  //   .catch((error: any) => console.log(error))

  // const myAsync = async (): Promise<Record<string, number | string>> => {
  //   await angelMowersPromise
  //   const response = await myPaymentPromise
  //   return response
  // }

  return (
    <div className='mt-8'>
      <h1 className='p-10'>RESOURSE</h1>
    </div>
  )
}
export default Pizza
