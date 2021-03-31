import { HardhatUserConfig } from "hardhat/types";
import "hardhat-gas-reporter";
import "hardhat-typechain";
import "hardhat-abi-exporter";

import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-solhint";
import "solidity-coverage";
// import "hardhat-spdx-license-identifier";

const hardhatConfig: HardhatUserConfig =  {
  // Networks
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
  },  
  solidity: {
    version: "0.6.1",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200
      }
    }
  },
  gasReporter: {
    enabled: false,
  },
  typechain: {
    outDir: "src/typechain",
    target: "ethers-v5",
  },
  abiExporter: {
    path: "abis",
    clear: true,
    flat: true,
    spacing: 2,
  }
  // TODO: Add spdx license identifier
  // spdxLicenseIdentifier: {
  //   overwrite: true,
  //   runOnCompile: true,
  // },
};

export default hardhatConfig;