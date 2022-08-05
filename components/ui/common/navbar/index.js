import Link from "next/link"
export default function Navbar() {
    return (
        <section>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative" aria-label="Global">
            <div className="flex justify-between">
              <div>
                <Link
                href="/"
                >
                <a  className="font-medium mr-8 text-gray-500 hover:text-gray-900">Home</a>
                </Link>
                <Link
                href="/marketplace" 
                >
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Marketplace</a>
                </Link>
                <Link
                href="/blogs"
                >
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Blogs</a>
                </Link>
              </div>
              <div className="flex justify-between">
              <Link
              href="#"
              >
                <a  className="font-medium mr-8 text-gray-500 hover:text-gray-900">Whishlist</a>
                </Link>
                <div
               className="rounded-md shadow"
                >
                <a  href="#" className="px-8 py-3 border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500">Connect</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    )
} 