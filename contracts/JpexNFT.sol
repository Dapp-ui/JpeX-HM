// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract JpexNFT is ERC721 {
    uint256 public tokenId;

    constructor() ERC721("Jpeg Exchange", "jpex") {
        
    }

    function tokenURI(uint256 tokenId_) public pure override returns (string memory) {
        require(tokenId_>=0, "Invalid token id");
        return "ipfs://bafyreifyzlku3mfkeszja22ayoufcy4qeldbupb4yw6pzhtjq6bcq7rv5a/metadata.json";
    }
    function mint() external {
        _mint(msg.sender, tokenId); 
             tokenId ++;
    }
}