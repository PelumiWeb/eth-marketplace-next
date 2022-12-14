import { useAccount } from "@components/hooks/web3/useAccounts"
import { useNetwork } from "@components/hooks/web3/useNetwork"
export default function EthRates() {

  const {accounts} = useAccount()
  const {network} = useNetwork()
  console.log(network)
    return (
        <section className="text-white bg-indigo-600">

        <div className="p-8">
          <h1 className="text-2xl">Hello, {accounts?.data}</h1>
          <h2 className="subtitle mb-5 text-xl">I hope you are having a great day!</h2>
          <div className="flex justify-between items-center">
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                  Learn how to purchase
                </a>
              </div>
            </div>
            <div>
              {network?.isLoading && !network.isSupported && <div className="bg-red-400 p-4 rounded-lg">
                Connected to the wrong Network 
                <div> 
                Connect to: {` `}
                <strong>
                {network.target}
                </strong>
              </div>
              </div>}
              <div><span>Currently on </span><strong className="text-2xl">{network.data}</strong></div>
            </div>
          </div>
        </div>
      </section>
    )
}