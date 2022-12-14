import { useWeb3 } from "@components/provider"
import { useAccount } from "@components/hooks/web3/useAccounts"
import Link from "next/link"
import Button from "../button"
import { useRouter } from "next/router"
export default function Navbar() {
  const {connect, isLoading, provider,} = useWeb3()
    const {accounts} = useAccount()
    const {pathname} = useRouter()
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
                !isLoading && provider && accounts ? 
                <Button className="text-white bg-indigo-600 hover:bg-indigo-500" onClick={connect}>
                Hi there {accounts.isAdmin ? "Admin" : null}
              </Button>
              :
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
       {accounts?.data && 
       !pathname.includes("/marketplace") &&
       <p className="flex justify-end sm:px-6 lg:px-8 bg-indigo-600 text-white p-2" style={{width: 450}}>{accounts?.data}</p>}

      </section>
    )
} 