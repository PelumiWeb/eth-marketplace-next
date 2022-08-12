import React from "react"
import useSWR from "swr"

const NETWORK = {
    1: "Ethereum Main Network",
    3: "Ropsen Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
    56: "Binance Smart Chain",
    1337: "Ganache",
}


export const Handler  = (web3) => () => {

    const {mutate, ...rest}  = useSWR(() => 
    web3 ? "web3/network" : null,
    async () => {
        const netId = await web3.eth.getChainId()
        return NETWORK[netId]
    }
    )
    React.useEffect(() => {
        ethereum && 
        ethereum.on("chainChanged", (chainId) => {
            mutate(parseInt(chainId, 16))
        })
    }, [])

return {
    network: {
        mutate, 
        ...rest
    }
}
}