import axios from "axios";
import { loadWallets } from "./utils.js";

const url = "https://www.zksyncpepe.com/resources/amounts/";

const run = async () => {
  const wallets = loadWallets("wallets.txt");
  const results = {};
  for (const wallet of wallets) {
    const URL = `${url}${wallet.toLowerCase()}.json`;
    let result = (await axios.get(URL))?.data;
    if (typeof result !== "string") {
      result = result[0];
    } else {
      result = 0;
    }
    results[wallet] = result;
  }
  console.log(results);
};

run();
