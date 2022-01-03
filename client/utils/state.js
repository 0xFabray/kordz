import MetisMarketToken from "../contracts/MetisMarketToken.json";
import MetisMarketplace from "../contracts/MetisMarket.json";
import { ethers } from "ethers";
import { api } from "./api";

let itemList = [];
let tokenContract = null;
let marketplaceContract = null;

export const getItemsForSale = async () => {
  const items = await api.get("/tokens");
  // const marketplaceContract = await getMarketplaceContract(chainId, library);
  // const items = await marketplaceContract.itemsForSale();
  // console.log(parseInt(items));
  // console.log(items);

  return items.data.result;
};

export const getItem = async (id) => {
  const items = await api.get(`/tokens/${id}`);
  // const marketplaceContract = await getMarketplaceContract(chainId, library);
  // const items = await marketplaceContract.itemsForSale();
  // console.log(parseInt(items));
  // console.log(items);

  return items.data;
};

export const getTokenContract = async (chainId, library) => {
  const signer = await library.getSigner();
  const contract = new ethers.Contract(
    MetisMarketToken.networks[Number(chainId)].address,
    MetisMarketToken.abi,
    signer
    // library
  );
  return contract;
};

export const getMarketplaceContract = async (chainId, library) => {
  const signer = await library.getSigner();
  return new ethers.Contract(
    MetisMarketplace.networks[Number(chainId)].address,
    MetisMarketplace.abi,
    // library
    signer
  );
};
