function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-extrabold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        You may have mistyped the address or the page may have moved.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        Go to Homepage
      </a>
    </div>
  );
}

export default NotFound;
