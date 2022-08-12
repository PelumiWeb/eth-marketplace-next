import {Handler as createUseAccount} from "./useAccount"
import {Handler as createUseNetwork} from "./useNetwork"


const DEFAULT_HOOKS = {
    useAccount: () => ({accounts: null})
}

export const setupHook = (web3) => {
    // if (!web3) {return DEFAULT_HOOKS}

    return {
        useAccount: createUseAccount(web3),
        useNetwork: createUseNetwork(web3),
    }
}