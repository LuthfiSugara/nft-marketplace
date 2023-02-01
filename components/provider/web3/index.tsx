import { useEffect } from "react";
import { createContext, FunctionComponent, useContext, useState } from "react";
import { createDefultState, createWeb3State, loadContract, Web3State } from "./utils";
import { ethers } from "ethers";
import { setupHooks } from "@hooks/web3/setupHooks";
import { MetaMaskInpageProvider } from "@metamask/providers";

const pageReload = () => {
    window.location.reload();
}

const handleAccount = (ethereum: MetaMaskInpageProvider) => async() => {
    const isLocked = !(await ethereum._metamask.isUnlocked());
    if(isLocked) {pageReload()}
}

const setGlonalListeners = (ethereum: MetaMaskInpageProvider) => {
    ethereum.on("chainChanged", pageReload);
    ethereum.on("accountChanged", handleAccount(ethereum));
}

const removeGlobalListeners = (ethereum: MetaMaskInpageProvider) => {
    ethereum?.removeListener("chainChanged", pageReload);
    ethereum?.removeListener("accountChanged", handleAccount);
}

const Web3Context = createContext<Web3State>(createDefultState());

const Web3Provider: FunctionComponent = ({children}) => {
    const [web3Api, setWeb3Api] = useState<Web3State>(createDefultState());

    useEffect(() => {
        async function initWeb3(){
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum as any);
                const contract = await loadContract("NftMarket", provider);
                
                setGlonalListeners(window.ethereum);
                setWeb3Api(createWeb3State({
                    ethereum: window.ethereum,
                    provider,
                    contract,
                    isLoading: false,
                }));
            }catch(e: any){
                console.error("Please connect web3 wallet");
                setWeb3Api((api) => createWeb3State({
                    ...api as any,
                    isLoading: false
                }))
            }
        }

        initWeb3();
        return () => removeGlobalListeners(window.ethereum);
    }, []);

    

    return (
        <Web3Context.Provider value={web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3(){
    return useContext(Web3Context);
}

export function useHooks(){
    const { hooks } = useWeb3();
    return hooks;
}

export default Web3Provider;