import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <div className='grid h-screen w-screen place-items-center'>
        <h1 className='font-poppins text-3xl'>Oops! something went wrong!😥</h1>
        <p>
          <strong className='font-poppins text-3xl'>
            Error: {error.status} - {error.statusText}
          </strong>
        </p>
        <Link to='/' className='font-bold text-blue-500'>
          Back to homepage
        </Link>
      </div>
    )
  }
  return <p>Unknown Error</p>
}

export default ErrorPage
