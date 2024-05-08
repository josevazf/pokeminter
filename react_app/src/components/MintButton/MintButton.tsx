// @ts-nocheck
import React from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt, BaseError, useChainId } from "wagmi";
import { abi } from '../../contracts/minter_abi'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import '../PokeModal/PokeModal.style.css'
import { baseSepolia, sepolia } from "viem/chains";

const sepoliaAddress = '0x35c6D97EaAcA055480e3471C1045e4659F9371e7';
const baseSepoliaAddress = `0x4e7A8e08F86f1653669eA9E26388268b1210Eb3f`;

export function MintButton({ id }: { id: number }) {
  const { address: connectedAddress } = useAccount();
  const account = useAccount();
  const { openConnectModal } = useConnectModal();
  const chainId = useChainId();

  var contractAddress = "";

  if (chainId === sepolia.id) {
    contractAddress = sepoliaAddress; 
  } else if (chainId === baseSepolia.id) {
    contractAddress = baseSepoliaAddress;
  }

  const {
    data: hash,
    isPending,
    error,
    writeContract
  } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  return (
    <>
      <button
        className="close-btn"
        width={"100px"}
        type="submit"
        disabled={isPending}
        onClick={() => {
          account.status === 'disconnected' ?
          openConnectModal() :
          writeContract({
            address: contractAddress,
            abi,
            functionName: "mintNFT",
            args: [connectedAddress, BigInt(id)],
          })
        }
        }
       >
      <img height={"80px"} src="/assets/pokeball_icon.png"></img>
      {isPending ? <div>Trying...</div> : isConfirming ? <div>Catching...</div> : <div>Catch</div>}
      {/* {hash && <div>Transaction Hash: {hash}</div>} */}
      {isConfirmed && <div><a target={"_blank"} href={`https://sepolia.etherscan.io/tx/${hash}`}>
        Transaction details</a></div>}
      {error && (
        <div style={{fontFamily: "Poppins", color: "#CC0000"}} >{(error as BaseError).shortMessage}</div>
      )}
      </button>
    </>
  )
}
