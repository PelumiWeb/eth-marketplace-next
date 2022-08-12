import React from "react"
import useSWR from "swr"


export const Handler  = (web3) => () => {

    const {mutate, ...rest}  = useSWR(() => 
    web3 ? "web3/network" : null,
    async () => {
        const netId = await web3.eth.net.getId()
        return netId
    }
    )
    React.useEffect(() => {
        ethereum && 
        ethereum.on("chainChanged", (netId) => {
            mutate(netId)
        })
    }, [])

return {
    network: {
        mutate, 
        ...rest
    }
}
}