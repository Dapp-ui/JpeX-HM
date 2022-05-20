/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NftOptionBuyersVaultFactory,
  NftOptionBuyersVaultFactoryInterface,
} from "../NftOptionBuyersVaultFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
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
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "nft",
        type: "string",
      },
    ],
    name: "deployVault",
    outputs: [
      {
        internalType: "contract NftOptionBuyersVault",
        name: "vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "nft",
        type: "string",
      },
    ],
    name: "getVaultFromOptionParams",
    outputs: [
      {
        internalType: "contract NftOptionBuyersVault",
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
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
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
        internalType: "contract NftOptionBuyersVault",
        name: "vault",
        type: "address",
      },
    ],
    name: "isVaultDeployed",
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
    name: "owner",
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
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055611f99806100326000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806313af40351461008857806326f7a6d01461009d57806327c97fa5146100cd5780637d6020f4146100e05780638da5cb5b1461010d578063b6a5d7de14610120578063b918161114610133578063ced7d90c14610156578063fe9fbb8014610169575b600080fd5b61009b610096366004610415565b610195565b005b6100b06100ab36600461044f565b6101ea565b6040516001600160a01b0390911681526020015b60405180910390f35b61009b6100db366004610415565b6102e4565b6100fd6100ee366004610415565b6001600160a01b03163b151590565b60405190151581526020016100c4565b6000546100b0906001600160a01b031681565b61009b61012e366004610415565b61032f565b6100fd610141366004610415565b60016020526000908152604090205460ff1681565b6100b061016436600461044f565b610387565b6100fd610177366004610415565b6001600160a01b031660009081526001602052604090205460ff1690565b6000546001600160a01b031633146101c85760405162461bcd60e51b81526004016101bf906104ff565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006102de60ff60f81b30846040516020016102069190610559565b604051602081830303815290604052805190602001206040518060200161022c906103f3565b601f1982820381018352601f90910116604081905261024f908890602001610559565b60408051601f198184030181529082905261026d929160200161058c565b604051602081830303815290604052805190602001206040516020016102c594939291906001600160f81b031994909416845260609290921b6001600160601b03191660018401526015830152603582015260550190565b6040516020818303038152906040528051906020012090565b92915050565b6000546001600160a01b0316331461030e5760405162461bcd60e51b81526004016101bf906104ff565b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b031633146103595760405162461bcd60e51b81526004016101bf906104ff565b610384816001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b50565b6000808260405160200161039b9190610559565b60405160208183030381529060405280519060200120905080836040516103c1906103f3565b6103cb9190610559565b8190604051809103906000f59050801580156103eb573d6000803e3d6000fd5b509392505050565b6119a8806105bc83390190565b6001600160a01b038116811461038457600080fd5b60006020828403121561042757600080fd5b813561043281610400565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561046157600080fd5b81356001600160401b038082111561047857600080fd5b818401915084601f83011261048c57600080fd5b81358181111561049e5761049e610439565b604051601f8201601f19908116603f011681019083821181831017156104c6576104c6610439565b816040528281528760208487010111156104df57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60208082526010908201526f29b2b73232b9103737ba1037bbb732b960811b604082015260600190565b60005b8381101561054457818101518382015260200161052c565b83811115610553576000848401525b50505050565b6020815260008251806020840152610578816040850160208701610529565b601f01601f19169190910160400192915050565b6000835161059e818460208801610529565b8351908301906105b2818360208801610529565b0194935050505056fe60c060405273c778417e063141139fce010982780140aa0cd5ab608052670de0b6b3a764000060a0523480156200003557600080fd5b50604051620019a8380380620019a883398101604081905262000058916200014d565b600080546001600160a01b0319163317905580516200007f90600390602084019062000091565b50506004805460ff1916905562000266565b8280546200009f9062000229565b90600052602060002090601f016020900481019282620000c357600085556200010e565b82601f10620000de57805160ff19168380011785556200010e565b828001600101855582156200010e579182015b828111156200010e578251825591602001919060010190620000f1565b506200011c92915062000120565b5090565b5b808211156200011c576000815560010162000121565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200016157600080fd5b82516001600160401b03808211156200017957600080fd5b818501915085601f8301126200018e57600080fd5b815181811115620001a357620001a362000137565b604051601f8201601f19908116603f01168101908382118183101715620001ce57620001ce62000137565b816040528281528886848701011115620001e757600080fd5b600093505b828410156200020b5784840186015181850187015292850192620001ec565b828411156200021d5760008684830101525b98975050505050505050565b600181811c908216806200023e57607f821691505b602082108114156200026057634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a0516116eb620002bd6000396000818161017f015281816107c801526108930152600081816103a70152818161055c015281816105ef015281816108d101528181610d8a0152610fbc01526116eb6000f3fe608060405234801561001057600080fd5b50600436106101755760003560e01c80630e962f001461017a57806313af4035146101b457806314d03a32146101c9578063167aae77146101d157806323891e52146101fc57806327c97fa51461022c5780633d0e85731461023f57806343c405141461025257806347ccca02146102655780634ba1bb9b1461027a578063696da4e6146102a55780636db29f6d146102ba578063714f5bfc146102c257806376671808146102e25780637d3498fc146102eb5780637e36701f1461031657806380eb3380146103295780638232e06e1461033c5780638da5cb5b1461035c5780639ba7367a1461037c578063ac191d9d1461038f578063ad5c4648146103a2578063ae50669a146103c9578063b6a5d7de146103dc578063b9181611146103ef578063ca6b599114610422578063d2a353ff14610435578063da034e9914610464578063db41b1c114610477578063fe9fbb80146104a2578063ffd9eedb146104ce575b600080fd5b6101a17f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101c76101c2366004611384565b6104ed565b005b6101c7610542565b6101a16101df36600461139f565b600560209081526000928352604080842090915290825290205481565b6101c761020a366004611384565b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b6101c761023a366004611384565b610671565b6101c761024d3660046113c1565b6106bc565b6101a16102603660046113da565b610989565b61026d6109bc565b6040516101ab9190611430565b6101a161028836600461139f565b600a60209081526000928352604080842090915290825290205481565b6102ad610a4a565b6040516101ab9190611463565b6101c7610aad565b6101a16102d03660046113c1565b600b6020526000908152604090205481565b6101a160025481565b6101a16102f936600461139f565b600660209081526000928352604080842090915290825290205481565b6101a161032436600461139f565b610b18565b6101c76103373660046114f2565b610b49565b6101a161034a3660046113c1565b60096020526000908152604090205481565b60005461036f906001600160a01b031681565b6040516101ab9190611565565b6101a161038a3660046113da565b610c4f565b6101c761039d36600461139f565b610ca8565b61036f7f000000000000000000000000000000000000000000000000000000000000000081565b6101c76103d73660046113c1565b610deb565b6101c76103ea366004611384565b610e51565b6104126103fd366004611384565b60016020526000908152604090205460ff1681565b60405190151581526020016101ab565b600c5461036f906001600160a01b031681565b6101c761044336600461139f565b60025460009081526007602090815260408083209483529390529190912055565b6101c761047236600461139f565b610ea9565b6101a161048536600461139f565b600760209081526000928352604080842090915290825290205481565b6104126104b0366004611384565b6001600160a01b031660009081526001602052604090205460ff1690565b6004546104db9060ff1681565b60405160ff90911681526020016101ab565b6000546001600160a01b031633146105205760405162461bcd60e51b815260040161051790611579565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6040516370a0823160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610591903090600401611565565b602060405180830381865afa1580156105ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d291906115a3565b600c546040516323b872dd60e01b81529192506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926323b872dd9261062a92309291169086906004016115bc565b6020604051808303816000875af1158015610649573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066d91906115e0565b5050565b6000546001600160a01b0316331461069b5760405162461bcd60e51b815260040161051790611579565b6001600160a01b03166000908152600160205260409020805460ff19169055565b6002546000908152600b60205260409020546005146107115760405162461bcd60e51b8152602060048201526011602482015270115c1bd8da081b9bdd08195e1c1a5c9959607a1b6044820152606401610517565b60025460009081526007602090815260408083208484529091529020546107665760405162461bcd60e51b815260206004820152600960248201526804561726e696e6720360bc1b6044820152606401610517565b6000338260405160200161077b929190611602565b60408051601f19818403018152918152815160209283012060025460008181526006855283812087825285528381205491815260058552838120838252909452918320549093506107ec917f0000000000000000000000000000000000000000000000000000000000000000610fe8565b600254600090815260056020908152604080832086845290915281205590508061086f5760405162461bcd60e51b815260206004820152602e60248201527f55736572206861766520656974686572203020736861726573206f7220616c7260448201526d32b0b23c903bb4ba34323930bbb760911b6064820152608401610517565b60025460009081526007602090815260408083208684529091528120546108b790837f000000000000000000000000000000000000000000000000000000000000000061100a565b6040516323b872dd60e01b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061090a903090339086906004016115bc565b6020604051808303816000875af1158015610929573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094d91906115e0565b5060405181815233907f6a8d334a32dfb49dae325dba76deb51b0b8f5ea50b1cdfa70710f4dc1b9c24c59060200160405180910390a250505050565b6000828260405160200161099e929190611602565b60405160208183030381529060405280519060200120905092915050565b600380546109c99061161f565b80601f01602080910402602001604051908101604052809291908181526020018280546109f59061161f565b8015610a425780601f10610a1757610100808354040283529160200191610a42565b820191906000526020600020905b815481529060010190602001808311610a2557829003601f168201915b505050505081565b600254600090815260086020908152604091829020805483518184028101840190945280845260609392830182828015610aa357602002820191906000526020600020905b815481526020019060010190808311610a8f575b5050505050905090565b6002546000908152600b602052604090205460051415610b015760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48115e1c1a5c9959608a1b6044820152606401610517565b6002546000908152600b6020526040902060059055565b60086020528160005260406000208181548110610b3457600080fd5b90600052602060002001600091509150505481565b60028054600101908190556000908152600860205260409020610b6d908686611308565b50600280546000908152600b602090815260408083206001905592548252600990529081208290555b84811015610c0c57838382818110610bb057610bb061165a565b90506020020135600a600060025481526020019081526020016000206000888885818110610be057610be061165a565b905060200201358152602001908152602001600020819055508080610c0490611670565b915050610b96565b507febad8099c467528a56c98b63c8d476d251cf1ffb4c75db94b4d23fa2b6a1e335600254604051610c4091815260200190565b60405180910390a15050505050565b600060056000600254815260200190815260200160002060008484604051602001610c7b929190611602565b60405160208183030381529060405280519060200120815260200190815260200160002054905092915050565b600280546000908152600b602052604090205414610d085760405162461bcd60e51b815260206004820181905260248201527f4f7074696f6e2057726974696e672068617320616c726561647920626567756e6044820152606401610517565b8160056000600254815260200190815260200160002060003384604051602001610d33929190611602565b60408051601f1981840301815291815281516020928301208352828201939093529082016000908120805490940190935560025483526006815281832084845290529020805483019055610db26001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611025565b60405182815233907f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c49060200160405180910390a25050565b600081118015610dfb5750600681105b610e3d5760405162461bcd60e51b8152602060048201526013602482015272696e76616c6964207374617465207661756c6560681b6044820152606401610517565b6002546000908152600b6020526040902055565b6000546001600160a01b03163314610e7b5760405162461bcd60e51b815260040161051790611579565b610ea6816001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b50565b600280546000908152600b602052604090205414610f015760405162461bcd60e51b8152602060048201526015602482015274149bdd5b9908185b1c9958591e481cdd185c9d1959605a1b6044820152606401610517565b60003382604051602001610f16929190611602565b60408051601f198184030181529181528151602092830120600254600090815260058452828120828252909352912054909150831115610f8c5760405162461bcd60e51b81526020600482015260116024820152700576974686472617720416d6f756e74203607c1b6044820152606401610517565b6002546000908152600560209081526040808320848452909152902080548490039055610fe36001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163385611083565b505050565b82810282151584158583048414171661100057600080fd5b9190910492915050565b828202831584820484141761101e57600080fd5b0492915050565b61107d846323b872dd60e01b858585604051602401611046939291906115bc565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526110b3565b50505050565b6040516001600160a01b038316602482015260448101829052610fe390849063a9059cbb60e01b90606401611046565b6000611108826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111859092919063ffffffff16565b805190915015610fe3578080602001905181019061112691906115e0565b610fe35760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610517565b6060611194848460008561119e565b90505b9392505050565b6060824710156111ff5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610517565b6001600160a01b0385163b6112565760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610517565b600080866001600160a01b031685876040516112729190611699565b60006040518083038185875af1925050503d80600081146112af576040519150601f19603f3d011682016040523d82523d6000602084013e6112b4565b606091505b50915091506112c48282866112cf565b979650505050505050565b606083156112de575081611197565b8251156112ee5782518084602001fd5b8160405162461bcd60e51b81526004016105179190611430565b828054828255906000526020600020908101928215611343579160200282015b82811115611343578235825591602001919060010190611328565b5061134f929150611353565b5090565b5b8082111561134f5760008155600101611354565b80356001600160a01b038116811461137f57600080fd5b919050565b60006020828403121561139657600080fd5b61119782611368565b600080604083850312156113b257600080fd5b50508035926020909101359150565b6000602082840312156113d357600080fd5b5035919050565b600080604083850312156113ed57600080fd5b6113f683611368565b946020939093013593505050565b60005b8381101561141f578181015183820152602001611407565b8381111561107d5750506000910152565b602081526000825180602084015261144f816040850160208701611404565b601f01601f19169190910160400192915050565b6020808252825182820181905260009190848201906040850190845b8181101561149b5783518352928401929184019160010161147f565b50909695505050505050565b60008083601f8401126114b957600080fd5b5081356001600160401b038111156114d057600080fd5b6020830191508360208260051b85010111156114eb57600080fd5b9250929050565b60008060008060006060868803121561150a57600080fd5b85356001600160401b038082111561152157600080fd5b61152d89838a016114a7565b9097509550602088013591508082111561154657600080fd5b50611553888289016114a7565b96999598509660400135949350505050565b6001600160a01b0391909116815260200190565b60208082526010908201526f29b2b73232b9103737ba1037bbb732b960811b604082015260600190565b6000602082840312156115b557600080fd5b5051919050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156115f257600080fd5b8151801515811461119757600080fd5b60609290921b6001600160601b0319168252601482015260340190565b600181811c9082168061163357607f821691505b6020821081141561165457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561169257634e487b7160e01b600052601160045260246000fd5b5060010190565b600082516116ab818460208701611404565b919091019291505056fea2646970667358221220001ccc961d7693eec579faf99cd2922a0721d90f9f137dca4cc1d7140b18c3ae64736f6c634300080a0033a2646970667358221220ee12683f2949fbb97d2058bcf2af281644acc24d9ca049b6e7a71de65cce46e964736f6c634300080a0033";

export class NftOptionBuyersVaultFactory__factory extends ContractFactory {
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
  ): Promise<NftOptionBuyersVaultFactory> {
    return super.deploy(
      overrides || {}
    ) as Promise<NftOptionBuyersVaultFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NftOptionBuyersVaultFactory {
    return super.attach(address) as NftOptionBuyersVaultFactory;
  }
  connect(signer: Signer): NftOptionBuyersVaultFactory__factory {
    return super.connect(signer) as NftOptionBuyersVaultFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NftOptionBuyersVaultFactoryInterface {
    return new utils.Interface(_abi) as NftOptionBuyersVaultFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NftOptionBuyersVaultFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NftOptionBuyersVaultFactory;
  }
}