import React from "react"

export const Handler  = web3 => () => {
    const [accounts, setAccounts] = React.useState("")

    React.useEffect(() => {
        const getAccount = async () => {
            try {
                console.log(web3)
                const accounts = await web3.eth.getAccounts()
                console.log(accounts)
                setAccounts(accounts[0])

            } catch (e) {
                setAccounts(e)
                console.error("Something went wrong")
            }
           
        }
        web3 && getAccount()
    }, [])

    React.useEffect(() => {
        ethereum && 
        ethereum.on("accountsChanged", (accounts) => {
            setAccounts(accounts[0] ?? null)
        })
    }, [])

    return {
        accounts
    }
}