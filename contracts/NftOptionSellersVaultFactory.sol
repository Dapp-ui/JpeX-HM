// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;


import "./libraries/Authorizable.sol";
import "@rari-capital/solmate/src/utils/Bytes32AddressLib.sol";
import "./NftOptionSellersVault.sol";


contract NftOptionSellersVaultFactory is Authorizable {
    using Bytes32AddressLib for address;
    using Bytes32AddressLib for bytes32;

    string public constant OPTION_WRITER_SALT = "option writer salt";

    constructor () Authorizable() { }

    function deployNftOptionVault(
        string memory nft,
        address contractAddress
    ) external onlyOwner returns (NftOptionSellersVault vault) {
        bytes32 salt = keccak256(abi.encode(nft, contractAddress, OPTION_WRITER_SALT));
        vault = new NftOptionSellersVault{salt: salt}(
            nft,
            contractAddress
        );
    }

    /*///////////////////////////////////////////////////////////////
                            VAULT LOOKUP LOGIC
    //////////////////////////////////////////////////////////////*/

    /// @notice Computes a Vault's address from its accepted NFT, strike, expiry.
    /// @param nft Underlying NFT
    /// @return The address of a Vault which accepts the provided underlying token.
    /// @dev The Vault returned may not be deployed yet. Use isVaultDeployed to check.
    function getVaultFromOptionParams(
        string memory nft,
        address contractAddress
    ) external view returns (NftOptionSellersVault) {
        return
            NftOptionSellersVault(
                keccak256(
                    abi.encodePacked(
                        // Prefix:
                        bytes1(0xFF),
                        // Creator:
                        address(this),
                        // Salt:
                        keccak256(abi.encode(nft, contractAddress,OPTION_WRITER_SALT)),
                        // Bytecode hash:
                        keccak256(
                            abi.encodePacked(
                                // Deployment bytecode:
                                type(NftOptionSellersVault).creationCode,
                                // Constructor arguments:
                                abi.encode(nft, contractAddress)
                            )
                        )
                    )
                ).fromLast20Bytes() // Convert the CREATE2 hash into an address.
                
            );
    }

    /// @notice Returns if a Vault at an address has already been deployed.
    /// @param vault The address of a Vault which may not have been deployed yet.
    /// @return A boolean indicating whether the Vault has been deployed already.
    /// @dev This function is useful to check the return values of getVaultFromUnderlying,
    /// as it does not check that the Vault addresses it computes have been deployed yet.
    function isVaultDeployed(NftOptionSellersVault vault) external view returns (bool) {
        return address(vault).code.length > 0;
    }
}