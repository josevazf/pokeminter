// @ts-nocheck
import React from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt, BaseError } from "wagmi";
import { abi } from '../../contracts/minter_abi'
import { useConnect } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import '../PokeModal/PokeModal.style.css'

//const CONTRACT_ADDRESS: `0x${string}` = `0x${contractJSON.contractAddress}`;

export function MintButton({ id }: { id: number }) {
  const { address: connectedAddress } = useAccount();
  const account = useAccount();
  const { openConnectModal } = useConnectModal();

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
      <img
        src="/assets/pokeball_icon.png"
        className="close-btn"
        width={"100px"}
        type="submit"
        onClick={() => {
          account.status === 'disconnected' ?
          openConnectModal() :
          writeContract({
            address: '0x25334b3D1b00b37298b17991cF5B19E48a63b66D',
            abi,
            functionName: "mintNFT",
            args: [connectedAddress, BigInt(id)],
          })
        }
        }
       />
        {/* {isPending ? 'Confirming...' : 'Mint'} */}
      {account.status === 'disconnected' ? <div>Connect Pokédex!</div> : 'Mint'}
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div><a target={"_blank"} href={`https://sepolia.etherscan.io/tx/${hash}`}>
        Transaction details</a></div>}
      {error && (
        <div>Error: {(error as BaseError).shortMessage}</div>
      )};
    </>
  )
}
