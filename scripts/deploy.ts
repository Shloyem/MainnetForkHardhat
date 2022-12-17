import { ethers } from "hardhat";

const vitalikAddress = "0x1Db3439a222C519ab44bb1144fC28167b4Fa6EE6"

async function main() {
  const [receiver] = await ethers.getSigners();
  const vitalikSigner = await ethers.getImpersonatedSigner(vitalikAddress);

  const vitalikBalanceBefore = await ethers.provider.getBalance(vitalikAddress);
  const receiverBalanceBefore = await ethers.provider.getBalance(receiver.address);
  console.log("Vitalik balance before %s", ethers.utils.formatEther(vitalikBalanceBefore));
  console.log("Receiver balance before %s", ethers.utils.formatEther(receiverBalanceBefore));

  const params =
  {
    to: receiver.address,
    value: ethers.utils.parseEther("6.7").toHexString()
  };

  const hash = await vitalikSigner.sendTransaction(params);
  //console.log("Transaction hash %s", hash);

  const vitalikBalanceAfter = await ethers.provider.getBalance(vitalikAddress);
  const receiverBalanceAfter = await ethers.provider.getBalance(receiver.address);
  console.log("Vitalik balance after %s", ethers.utils.formatEther(vitalikBalanceAfter));
  console.log("Receiver balance after %s", ethers.utils.formatEther(receiverBalanceAfter));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
