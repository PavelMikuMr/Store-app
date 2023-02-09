import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops! something went wrong!😥</h1>
        <p>
          <strong>
            Error: {error.status} - {error.statusText}
          </strong>
          <Link to='/' className='font-bold text-blue-500'>
            Back to homepage
          </Link>
        </p>
      </div>
    )
  }
  return <p>Unknown Error</p>
}

export default ErrorPage
