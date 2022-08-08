import { data } from "autoprefixer"
import React from "react"
import useSWR from "swr"

const adminAdress = {
    "0x93ff73142ef210836cdb4e1bee21f52888bc2f4ba28baafd88e40e16df130dee": true
}

export const Handler  = web3 => () => {
    const [accounts, setAccounts] = React.useState("")

    const {mutate,data, ...swrRes} = useSWR(() => {
      return web3 ? "web3/accounts" : null},
       async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0]
        }
    )

    swrRes.data

    // React.useEffect(() => {
    //     const getAccount = async () => {
    //         try {
    //             console.log(web3)
    //             const accounts = await web3.eth.getAccounts()
    //             console.log(accounts)
    //             setAccounts(accounts[0])

    //         } catch (e) {
    //             setAccounts(e)
    //             console.error("Something went wrong")
    //         }
           
    //     }
    //     web3 && getAccount()
    // }, [])

    React.useEffect(() => {
        ethereum && 
        ethereum.on("accountsChanged", (accounts) => {
            mutate(accounts[0] ?? null)
        })
    }, [])

    return {
        accounts:{
            data,
            isAdmin: (data && adminAdress[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...swrRes
        }
    }
}