
import { Web3Dependecies } from "@_types/hooks";
import { hookFactory as createAccountHook, UseAccountHook } from "./useAccount";
import { hookFactory as createNetworkHook, UseNetworkHook } from "./useNetwork";
import { hookFactory as createListedNftskHook, UseListedNftsHook } from "./useListedNfts";
import { hookFactory as createOwnedNftskHook, UseOwnedNftsHook } from "./useOwnedNfts";

export type Web3Hooks = {
    useAccount: UseAccountHook;
    useNetwork: UseNetworkHook;
    useListedNfts: UseListedNftsHook;
    useOwnedNfts: UseOwnedNftsHook;
}

export type SetupHook = {
    (d: Web3Dependecies): Web3Hooks
}

export const setupHooks: SetupHook = (deps) => {
    return {
        useAccount: createAccountHook(deps),
        useNetwork: createNetworkHook(deps),
        useListedNfts: createListedNftskHook(deps),
        useOwnedNfts: createOwnedNftskHook(deps),
    }
}