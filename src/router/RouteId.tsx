import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from '@/components/Spinner'

const RouteId = () => {
  const [users, setUsers] = React.useState<{ id: number; name: string }[]>([])
  const { id } = useParams()

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get<{ id: number; name: string }[]>(
          'https://jsonplaceholder.typicode.com/users'
        )
        return data
      } catch (error) {
        console.error(error)
        return []
      }
    })()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <div>
      {users.length > 0 ? (
        <div>This is User Number {users[Number(id)].name} </div>
      ) : (
        <Spinner />
      )}
    </div>
  )
}
export default RouteId
