import Link from 'next/link'
 
export default function NotFound() {
  return (
     <div className="bg-white text-center sm:py-32">
              
            <div className="mx-auto text-center max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">404</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Page not found
                </p>
                <Link 
                href="/"
                className="mb-8 text-blue-600 hover:text-blue-800 font-medium transition delay-50 duration-300 ease-in-out hover:-translate-x-3"
                >
                Return Home
                </Link>
            </div>
        </div>
  )
}