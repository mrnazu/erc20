const hre = require("hardhat");

async function main() {
  const NazuToken = await hre.ethers.getContractFactory("NazuToken");
  const nazuToken = await NazuToken.deploy(100000000, 50);

  await nazuToken.deployed();

  console.log("Nazu Token deployed: ", nazuToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
