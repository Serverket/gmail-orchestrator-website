import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-6xl font-bold text-gmail-red mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-8">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
        The page you're looking for doesn't seem to exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Return to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
