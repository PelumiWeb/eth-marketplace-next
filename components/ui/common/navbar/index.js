import { useWeb3 } from "@components/provider"
import { useAccount } from "@components/provider/web3/hooks/useAccount"
import Link from "next/link"
import Button from "../button"
export default function Navbar() {
  const {connect, isLoading, provider, web3, hooks} = useWeb3()
    const {accounts} = hooks.useAccount()
  console.log(accounts)
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
              <div className="flex justify-between items-center">
              <Link
              href="#"
              >
                <a  className="font-medium mr-8 text-gray-500 hover:text-gray-900">Whishlist</a>
                </Link>
                {/* {isLoading && 
                <Button> 
                  loading..
                  </Button>} */}
                {isLoading ?

                <Button disabled className="text-white bg-indigo-600 hover:bg-indigo-500"> 
                  Connecting..
                  </Button> :
                !isLoading && provider ? 
                <Button className="text-white bg-indigo-600 hover:bg-indigo-500" onClick={connect}>
                  Connect
                </Button>
                : 
                <Button className="text-white bg-indigo-600 hover:bg-indigo-500" onClick={() => window.open("https://metamask.io/download/",  "_blank")}>
                Install MetaMask
              </Button>
                }
              </div>
            </div>
          </nav>
        </div>
      </section>
    )
} 