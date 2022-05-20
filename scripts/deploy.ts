// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  console.log("Process", process.env.RINKEBY_URL);
  
  const NftOptionBuyersVaultFactory = await ethers.getContractFactory("NftOptionBuyersVaultFactory")
  const nftOptionBuyersVaultFactory = await NftOptionBuyersVaultFactory.deploy();

  await nftOptionBuyersVaultFactory.deployed();

  console.log("NftOptionBuyersVaultFactory deployed to:", nftOptionBuyersVaultFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
