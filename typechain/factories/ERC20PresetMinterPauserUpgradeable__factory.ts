/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20PresetMinterPauserUpgradeable,
  ERC20PresetMinterPauserUpgradeableInterface,
} from "../ERC20PresetMinterPauserUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c37806100206000396000f3fe608060405234801561001057600080fd5b506004361061015f5760003560e01c806301ffc9a71461016457806306fdde031461018c578063095ea7b3146101a157806318160ddd146101b457806323b872dd146101c6578063248a9ca3146101d95780632f2ff15d146101ec578063313ce5671461020157806336568abe1461021057806339509351146102235780633f4ba83a1461023657806340c10f191461023e57806342966c68146102515780634cd88b76146102645780635c975abb1461027757806370a082311461028357806379cc6790146102ac5780638456cb59146102bf5780639010d07c146102c757806391d14854146102e757806395d89b41146102fa578063a217fddf14610302578063a457c2d71461030a578063a9059cbb1461031d578063ca15c87314610330578063d539139314610343578063d547741f14610358578063dd62ed3e1461036b578063e63ab1e91461037e575b600080fd5b610177610172366004611715565b610393565b60405190151581526020015b60405180910390f35b6101946103be565b604051610183919061176b565b6101776101af3660046117ba565b610450565b60cb545b604051908152602001610183565b6101776101d43660046117e4565b610468565b6101b86101e7366004611820565b61048c565b6101ff6101fa366004611839565b6104a1565b005b60405160128152602001610183565b6101ff61021e366004611839565b6104c3565b6101776102313660046117ba565b610546565b6101ff610585565b6101ff61024c3660046117ba565b610603565b6101ff61025f366004611820565b61067e565b6101ff610272366004611907565b61068b565b61012d5460ff16610177565b6101b861029136600461196a565b6001600160a01b0316600090815260c9602052604090205490565b6101ff6102ba3660046117ba565b61074f565b6101ff610764565b6102da6102d5366004611985565b6107de565b60405161018391906119a7565b6101776102f5366004611839565b6107fd565b610194610828565b6101b8600081565b6101776103183660046117ba565b610837565b61017761032b3660046117ba565b6108c9565b6101b861033e366004611820565b6108d7565b6101b8600080516020611bc283398151915281565b6101ff610366366004611839565b6108ee565b6101b86103793660046119bb565b61090b565b6101b8600080516020611ba283398151915281565b60006001600160e01b03198216635a05180f60e01b14806103b857506103b882610936565b92915050565b606060cc80546103cd906119e5565b80601f01602080910402602001604051908101604052809291908181526020018280546103f9906119e5565b80156104465780601f1061041b57610100808354040283529160200191610446565b820191906000526020600020905b81548152906001019060200180831161042957829003601f168201915b5050505050905090565b60003361045e81858561096b565b5060019392505050565b600033610476858285610a8f565b610481858585610b09565b506001949350505050565b60009081526065602052604090206001015490565b6104aa8261048c565b6104b48133610cd0565b6104be8383610d34565b505050565b6001600160a01b03811633146105385760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105428282610d56565b5050565b33600081815260ca602090815260408083206001600160a01b038716845290915281205490919061045e9082908690610580908790611a36565b61096b565b61059d600080516020611ba2833981519152336107fd565b6105f95760405162461bcd60e51b81526020600482015260396024820152600080516020611b8283398151915260448201527876652070617573657220726f6c6520746f20756e706175736560381b606482015260840161052f565b610601610d78565b565b61061b600080516020611bc2833981519152336107fd565b6106745760405162461bcd60e51b81526020600482015260366024820152600080516020611b828339815191526044820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b606482015260840161052f565b6105428282610e07565b6106883382610ee0565b50565b600054610100900460ff166106a65760005460ff16156106aa565b303b155b61070d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161052f565b600054610100900460ff1615801561072f576000805461ffff19166101011790555b6107398383611028565b80156104be576000805461ff0019169055505050565b61075a823383610a8f565b6105428282610ee0565b61077c600080516020611ba2833981519152336107fd565b6107d65760405162461bcd60e51b81526020600482015260376024820152600080516020611b8283398151915260448201527676652070617573657220726f6c6520746f20706175736560481b606482015260840161052f565b61060161106b565b60008281526097602052604081206107f690836110e8565b9392505050565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060cd80546103cd906119e5565b33600081815260ca602090815260408083206001600160a01b0387168452909152812054909190838110156108bc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161052f565b610481828686840361096b565b60003361045e818585610b09565b60008181526097602052604081206103b8906110f4565b6108f78261048c565b6109018133610cd0565b6104be8383610d56565b6001600160a01b03918216600090815260ca6020908152604080832093909416825291909152205490565b60006001600160e01b03198216637965db0b60e01b14806103b857506301ffc9a760e01b6001600160e01b03198316146103b8565b6001600160a01b0383166109cd5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161052f565b6001600160a01b038216610a2e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161052f565b6001600160a01b03838116600081815260ca602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610a9b848461090b565b90506000198114610b035781811015610af65760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161052f565b610b03848484840361096b565b50505050565b6001600160a01b038316610b6d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161052f565b6001600160a01b038216610bcf5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161052f565b610bda8383836110fe565b6001600160a01b038316600090815260c9602052604090205481811015610c525760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161052f565b6001600160a01b03808516600090815260c96020526040808220858503905591851681529081208054849290610c89908490611a36565b92505081905550826001600160a01b0316846001600160a01b0316600080516020611be283398151915284604051610cc391815260200190565b60405180910390a3610b03565b610cda82826107fd565b61054257610cf2816001600160a01b03166014611109565b610cfd836020611109565b604051602001610d0e929190611a4e565b60408051601f198184030181529082905262461bcd60e51b825261052f9160040161176b565b610d3e82826112a4565b60008281526097602052604090206104be908261132a565b610d60828261133f565b60008281526097602052604090206104be90826113a6565b61012d5460ff16610dc25760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161052f565b61012d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610dfd91906119a7565b60405180910390a1565b6001600160a01b038216610e5d5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161052f565b610e69600083836110fe565b8060cb6000828254610e7b9190611a36565b90915550506001600160a01b038216600090815260c9602052604081208054839290610ea8908490611a36565b90915550506040518181526001600160a01b03831690600090600080516020611be28339815191529060200160405180910390a35050565b6001600160a01b038216610f405760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161052f565b610f4c826000836110fe565b6001600160a01b038216600090815260c9602052604090205481811015610fc05760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161052f565b6001600160a01b038316600090815260c960205260408120838303905560cb8054849290610fef908490611abd565b90915550506040518281526000906001600160a01b03851690600080516020611be28339815191529060200160405180910390a3505050565b600054610100900460ff1661104f5760405162461bcd60e51b815260040161052f90611ad4565b61105982826113bb565b611061611409565b610542828261143d565b61012d5460ff16156110b25760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161052f565b61012d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610df03390565b60006107f6838361149f565b60006103b8825490565b6104be8383836114c9565b60606000611118836002611b1f565b611123906002611a36565b6001600160401b0381111561113a5761113a611865565b6040519080825280601f01601f191660200182016040528015611164576020820181803683370190505b509050600360fc1b8160008151811061117f5761117f611b3e565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106111ae576111ae611b3e565b60200101906001600160f81b031916908160001a90535060006111d2846002611b1f565b6111dd906001611a36565b90505b6001811115611255576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061121157611211611b3e565b1a60f81b82828151811061122757611227611b3e565b60200101906001600160f81b031916908160001a90535060049490941c9361124e81611b54565b90506111e0565b5083156107f65760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161052f565b6112ae82826107fd565b6105425760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556112e63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006107f6836001600160a01b038416611530565b61134982826107fd565b156105425760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006107f6836001600160a01b03841661157f565b600054610100900460ff166113e25760405162461bcd60e51b815260040161052f90611ad4565b81516113f59060cc90602085019061167c565b5080516104be9060cd90602084019061167c565b600054610100900460ff166114305760405162461bcd60e51b815260040161052f90611ad4565b61012d805460ff19169055565b600054610100900460ff166114645760405162461bcd60e51b815260040161052f90611ad4565b61146f600033611672565b611487600080516020611bc283398151915233611672565b610542600080516020611ba283398151915233611672565b60008260000182815481106114b6576114b6611b3e565b9060005260206000200154905092915050565b61012d5460ff16156104be5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b606482015260840161052f565b6000818152600183016020526040812054611577575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103b8565b5060006103b8565b600081815260018301602052604081205480156116685760006115a3600183611abd565b85549091506000906115b790600190611abd565b905081811461161c5760008660000182815481106115d7576115d7611b3e565b90600052602060002001549050808760000184815481106115fa576115fa611b3e565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061162d5761162d611b6b565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103b8565b60009150506103b8565b6105428282610d34565b828054611688906119e5565b90600052602060002090601f0160209004810192826116aa57600085556116f0565b82601f106116c357805160ff19168380011785556116f0565b828001600101855582156116f0579182015b828111156116f05782518255916020019190600101906116d5565b506116fc929150611700565b5090565b5b808211156116fc5760008155600101611701565b60006020828403121561172757600080fd5b81356001600160e01b0319811681146107f657600080fd5b60005b8381101561175a578181015183820152602001611742565b83811115610b035750506000910152565b602081526000825180602084015261178a81604085016020870161173f565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146117b557600080fd5b919050565b600080604083850312156117cd57600080fd5b6117d68361179e565b946020939093013593505050565b6000806000606084860312156117f957600080fd5b6118028461179e565b92506118106020850161179e565b9150604084013590509250925092565b60006020828403121561183257600080fd5b5035919050565b6000806040838503121561184c57600080fd5b8235915061185c6020840161179e565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261188c57600080fd5b81356001600160401b03808211156118a6576118a6611865565b604051601f8301601f19908116603f011681019082821181831017156118ce576118ce611865565b816040528381528660208588010111156118e757600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561191a57600080fd5b82356001600160401b038082111561193157600080fd5b61193d8683870161187b565b9350602085013591508082111561195357600080fd5b506119608582860161187b565b9150509250929050565b60006020828403121561197c57600080fd5b6107f68261179e565b6000806040838503121561199857600080fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b600080604083850312156119ce57600080fd5b6119d78361179e565b915061185c6020840161179e565b600181811c908216806119f957607f821691505b60208210811415611a1a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a4957611a49611a20565b500190565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611a8081601785016020880161173f565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611ab181602884016020880161173f565b01602801949350505050565b600082821015611acf57611acf611a20565b500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000816000190483118215151615611b3957611b39611a20565b500290565b634e487b7160e01b600052603260045260246000fd5b600081611b6357611b63611a20565b506000190190565b634e487b7160e01b600052603160045260246000fdfe45524332305072657365744d696e7465725061757365723a206d75737420686165d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122027923d0e7542af093026dc7052fbe050eb9a4251864bed25cf46ab65358ec88d64736f6c634300080a0033";

export class ERC20PresetMinterPauserUpgradeable__factory extends ContractFactory {
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
  ): Promise<ERC20PresetMinterPauserUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<ERC20PresetMinterPauserUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20PresetMinterPauserUpgradeable {
    return super.attach(address) as ERC20PresetMinterPauserUpgradeable;
  }
  connect(signer: Signer): ERC20PresetMinterPauserUpgradeable__factory {
    return super.connect(signer) as ERC20PresetMinterPauserUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PresetMinterPauserUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as ERC20PresetMinterPauserUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PresetMinterPauserUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20PresetMinterPauserUpgradeable;
  }
}
