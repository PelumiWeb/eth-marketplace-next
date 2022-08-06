import {useAccount} from "./useAccount"

const DEFAULT_HOOKS = {
    useAccount: () => ({accounts: null})
}

export const setupHook = (web3) => {
    if (!web3) {return DEFAULT_HOOKS}

    return {
        useAccount: useAccount(web3)
    }
}