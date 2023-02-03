import { useState, useEffect } from 'react'

const Pizza = ({ ...props }) => {
  const [type, setType] = useState('users')
  console.log('render comment')
  useEffect(() => {
    console.log('type change', type)
  }, [type])
  return (
    <div className='mt-8'>
      <h1 className='p-10'>RESOURSE: {type}</h1>
      <button className='p-10' onClick={() => setType('users')}>
        Users
      </button>
      <button className='p-10' onClick={() => setType('TODO')}>
        TODO
      </button>
      <button className='p-10' onClick={() => setType('Posts')}>
        Posts
      </button>
    </div>
  )
}
export default Pizza
