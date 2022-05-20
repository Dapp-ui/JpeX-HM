// // SPDX-License-Identifier: Apache-2.0
// pragma solidity ^0.8.0;
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// contract Sayc is ERC721 {
//     uint256 public tokenId;

//     constructor() ERC721("Sad ape yacht club", "sayc") {
//         // _setBaseURI("https://ipfs.io/ipfs/");
//     }

//     function tokenURI(uint256 tokenId_) public pure override returns (string memory) {
//         return "https://ipfs.io/ipfs/QmeMmdSgg5psqCfTxQmEtXkYKMqhTivxMNevFyfBbqY3Fp";
//     }
//     function mintAll100() external {
//         for (uint256 i = 0; i < 99; i++) {
//              _mint(0x5c679543E519eAcD7F8f8D15Fd15F9F9D77829dF, tokenId);           
//         }
//     }
// }