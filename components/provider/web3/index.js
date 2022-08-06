import React, {createContext, useContext} from "react"
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from "web3"

const web3Context  = createContext(null)

export default function Web3provider(props) {

    const [web3API, setWeb3API] = React.useState({
        provider: null,
        web3: null,
        contract: null,
        isLoading: true,
    })

    React.useEffect(() => {
        const Loader = async () => {
            const provider = await detectEthereumProvider()

            if (provider) {
                const web3 = new Web3(provider || "ws://localhost:7545");
                setWeb3API((api) => ({
                    ...api,
                    provider,
                    web3,
                    isLoading: false,
                }))

                console.log('Ethereum successfully detected!')
              
                // From now on, this should always be true:
                // provider === window.ethereum
              
                // Access the decentralized web!
              
                // Legacy providers may only have ethereum.sendAsync
                const chainId = await provider.request({
                  method: 'eth_chainId'
                })
              } else {
              setWeb3API((api) => ({
                ...api,
                isLoading: false,
              }))
                // if the provider is not detected, detectEthereumProvider resolves to null
                // console.error('Please install MetaMask!', error)
              }
        }
        Loader()
    }, [])
    const connectMetaMask = async () => {
        try {
            await web3API.provider.request({method: "eth_requestAccounts"})
        } catch(e) {
            location.reload()
            // console.error("Cannnot connect to MetaMask")
        }
    }

    const _web3API = React.useMemo(() => {
        return {
            ...web3API,
            connect: () => web3API.provider ? connectMetaMask() : () => console.error('Cannot connect to MetaMask, try to reload your browser please.'),
            test: () => console.log("Trying to test"),
        }
    }, [web3API])

    return (
        <web3Context.Provider value={_web3API}> 
            {props.children}
        </web3Context.Provider>
    )
}


export function useWeb3() {
    return useContext(web3Context)
}