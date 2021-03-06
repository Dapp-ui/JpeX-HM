/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Utils, UtilsInterface } from "../Utils";

const _abi = [
  {
    inputs: [],
    name: "BASE_UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRE_LIQUIDATION_WINDOW",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "a",
        type: "string",
      },
      {
        internalType: "string",
        name: "b",
        type: "string",
      },
    ],
    name: "concatenate",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "nft",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "strike",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "optionType",
        type: "uint8",
      },
    ],
    name: "getNftOptionVaultName",
    outputs: [
      {
        internalType: "string",
        name: "nftOptionVaultName",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61048861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c80630e962f0014610071578063238ca8ed14610093578063266001d3146100b3578063373f7561146100c6578063ad5c4648146100cf578063c2ee3a0814610071575b600080fd5b610080670de0b6b3a764000081565b6040519081526020015b60405180910390f35b6100a66100a136600461027b565b610102565b60405161008a9190610330565b6100a66100c136600461034a565b61018b565b610080611c2081565b6100ea73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b6040516001600160a01b03909116815260200161008a565b606060ff82161561012d5760405180604001604052806002815260200161502d60f01b815250610149565b60405180604001604052806002815260200161432d60f01b8152505b8561015e86670de0b6b3a764000060016101b7565b8560405160200161017294939291906103c1565b6040516020818303038152906040529050949350505050565b606082826040516020016101a0929190610424565b604051602081830303815290604052905092915050565b8281028215158415858304841417166101cf57600080fd5b9190910492915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261020057600080fd5b81356001600160401b038082111561021a5761021a6101d9565b604051601f8301601f19908116603f01168101908282118183101715610242576102426101d9565b8160405283815286602085880101111561025b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806080858703121561029157600080fd5b84356001600160401b038111156102a757600080fd5b6102b3878288016101ef565b9450506020850135925060408501359150606085013560ff811681146102d857600080fd5b939692955090935050565b6000815180845260005b81811015610309576020818501810151868301820152016102ed565b8181111561031b576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061034360208301846102e3565b9392505050565b6000806040838503121561035d57600080fd5b82356001600160401b038082111561037457600080fd5b610380868387016101ef565b9350602085013591508082111561039657600080fd5b506103a3858286016101ef565b9150509250929050565b60018152602d60f81b602082015260400190565b60c0815260006103d460c08301876102e3565b82810360208401526103e681876102e3565b905082810360408401526103f9816103ad565b90508460608401528281036080840152610412816103ad565b9150508260a083015295945050505050565b60408152600061043760408301856102e3565b828103602084015261044981856102e3565b9594505050505056fea2646970667358221220891bf998c6c1cc0f5026145d772244da26f618cfcf4297453ebc22b8fefc89ea64736f6c634300080a0033";

export class Utils__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Utils> {
    return super.deploy(overrides || {}) as Promise<Utils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Utils {
    return super.attach(address) as Utils;
  }
  connect(signer: Signer): Utils__factory {
    return super.connect(signer) as Utils__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UtilsInterface {
    return new utils.Interface(_abi) as UtilsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Utils {
    return new Contract(address, _abi, signerOrProvider) as Utils;
  }
}
