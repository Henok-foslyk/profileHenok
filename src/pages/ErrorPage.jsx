import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="mt-4 text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2 text-gray-500 italic">
        {error.statusText || error.message}
      </p>
    </div>
  )
}