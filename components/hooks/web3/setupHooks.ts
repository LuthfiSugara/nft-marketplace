
import { Web3Dependecies } from "@_types/hooks";
import { hookFactory as createAccountHook, UseAccountHook } from "./useAccount";
import { hookFactory as createNetworkHook, UseNetworkHook } from "./useNetwork";

export type Web3Hooks = {
    useAccount: UseAccountHook;
    useNetwork: UseNetworkHook;
}

export type SetupHook = {
    (d: Web3Dependecies): Web3Hooks
}

export const setupHooks: SetupHook = (deps) => {
    return {
        useAccount: createAccountHook(deps),
        useNetwork: createNetworkHook(deps)
    }
}