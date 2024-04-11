"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CELO_ALFAJORES = exports.CEUR_CELO = exports.CUSD_CELO = exports.DAI_CELO = exports.CELO = exports.USDT_BNB = exports.USDC_BNB = exports.ETH_BNB = exports.DAI_BNB = exports.BUSD_BNB = exports.BTC_BNB = exports.WETH_POLYGON_MUMBAI = exports.DAI_POLYGON_MUMBAI = exports.USDC_POLYGON_MUMBAI = exports.WMATIC_POLYGON_MUMBAI = exports.DAI_POLYGON = exports.USDC_POLYGON = exports.WETH_POLYGON = exports.WMATIC_POLYGON = exports.USDC_ARBITRUM_GOERLI = exports.DAI_ARBITRUM_GOERLI = exports.ARB_ARBITRUM = exports.DAI_ARBITRUM = exports.WBTC_ARBITRUM = exports.USDT_ARBITRUM = exports.USDC_ARBITRUM = exports.DAI_OPTIMISM_GOERLI = exports.WBTC_OPTIMISM_GOERLI = exports.USDT_OPTIMISM_GOERLI = exports.USDC_OPTIMISM_GOERLI = exports.OP_OPTIMISM = exports.DAI_OPTIMISM = exports.WBTC_OPTIMISM = exports.USDT_OPTIMISM = exports.USDC_OPTIMISM = exports.UNI_GOERLI = exports.DAI_GOERLI = exports.WBTC_GOERLI = exports.USDT_GOERLI = exports.USDC_GOERLI = exports.DAI_SEPOLIA = exports.USDC_SEPOLIA = exports.LIDO_MAINNET = exports.AAVE_MAINNET = exports.UNI_MAINNET = exports.FEI_MAINNET = exports.DAI_MAINNET = exports.WBTC_MAINNET = exports.USDT_MAINNET = exports.USDC_MAINNET = void 0;
exports.WNATIVE_ON = exports.USDC_ON = exports.USDT_ON = exports.DAI_ON = exports.TokenProvider = exports.WBTC_MOONBEAM = exports.DAI_MOONBEAM = exports.WGLMR_MOONBEAM = exports.USDC_MOONBEAM = exports.WBTC_GNOSIS = exports.WXDAI_GNOSIS = exports.USDC_ETHEREUM_GNOSIS = exports.USDC_BASE_GOERLI = exports.USDC_BASE = exports.USDC_AVAX = exports.DAI_AVAX = exports.USDC_CLASSIC_MORDOR = exports.USC_CLASSIC = exports.USDC_CLASSIC = exports.CEUR_CELO_ALFAJORES = exports.CUSD_CELO_ALFAJORES = exports.DAI_CELO_ALFAJORES = void 0;
const abi_1 = require("@ethersproject/abi");
const strings_1 = require("@ethersproject/strings");
const sdk_core_1 = require("@uniswap/sdk-core");
const lodash_1 = __importDefault(require("lodash"));
const IERC20Metadata__factory_1 = require("../types/v3/factories/IERC20Metadata__factory");
const util_1 = require("../util");
// Some well known tokens on each chain for seeding cache / testing.
exports.USDC_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
exports.USDT_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
exports.WBTC_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
exports.FEI_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
exports.UNI_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 18, 'UNI', 'Uniswap');
exports.AAVE_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', 18, 'AAVE', 'Aave Token');
exports.LIDO_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32', 18, 'LDO', 'Lido DAO Token');
exports.USDC_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.SEPOLIA, '0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5', 18, 'USDC', 'USDC Token');
exports.DAI_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.SEPOLIA, '0x7AF17A48a6336F7dc1beF9D485139f7B6f4FB5C8', 18, 'DAI', 'DAI Token');
exports.USDC_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
exports.USDT_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0xe583769738b6dd4e7caf8451050d1948be717679', 18, 'USDT', 'Tether USD');
exports.WBTC_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844', 18, 'DAI', 'Dai Stablecoin');
exports.UNI_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uni token');
exports.USDC_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USD//C');
exports.USDT_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'Tether USD');
exports.WBTC_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x68f180fcCe6836688e9084f035309E29Bf0A2095', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.OP_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x4200000000000000000000000000000000000042', 18, 'OP', 'Optimism');
exports.USDC_OPTIMISM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_GOERLI, '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E', 6, 'USDC', 'USD//C');
exports.USDT_OPTIMISM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_GOERLI, '0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE', 6, 'USDT', 'Tether USD');
exports.WBTC_OPTIMISM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_GOERLI, '0xe0a592353e81a94Db6E3226fD4A99F881751776a', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_OPTIMISM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_GOERLI, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.USDC_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD//C');
exports.USDT_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD');
exports.WBTC_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.ARB_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0x912CE59144191C1204E64559FE8253a0e49E6548', 18, 'ARB', 'Arbitrum');
exports.DAI_ARBITRUM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_GOERLI, '0x0000000000000000000000000000000000000000', // TODO: add address
18, 'DAI', 'Dai Stablecoin');
// Bridged version of official Goerli USDC
exports.USDC_ARBITRUM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_GOERLI, '0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892', 6, 'USDC', 'USD//C');
//polygon tokens
exports.WMATIC_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC');
exports.WETH_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped Ether');
exports.USDC_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD//C');
exports.DAI_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin');
//polygon mumbai tokens
exports.WMATIC_POLYGON_MUMBAI = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC');
exports.USDC_POLYGON_MUMBAI = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON_MUMBAI, '0xe11a86849d99f524cac3e7a0ec1241828e332c62', 6, 'USDC', 'USD//C');
exports.DAI_POLYGON_MUMBAI = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON_MUMBAI, '0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f', 18, 'DAI', 'Dai Stablecoin');
exports.WETH_POLYGON_MUMBAI = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON_MUMBAI, '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa', 18, 'WETH', 'Wrapped Ether');
// BNB chain Tokens
exports.BTC_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC');
exports.BUSD_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'BUSD');
exports.DAI_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'DAI');
exports.ETH_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'ETH');
exports.USDC_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USDC');
exports.USDT_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'USDT');
// Celo Tokens
exports.CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo native asset');
exports.DAI_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0xE4fE50cdD716522A56204352f00AA110F731932d', 18, 'DAI', 'Dai Stablecoin');
exports.CUSD_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'CUSD', 'Celo Dollar Stablecoin');
exports.CEUR_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73', 18, 'CEUR', 'Celo Euro Stablecoin');
// Celo Alfajores Tokens
exports.CELO_ALFAJORES = new sdk_core_1.Token(sdk_core_1.ChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo native asset');
exports.DAI_CELO_ALFAJORES = new sdk_core_1.Token(sdk_core_1.ChainId.CELO_ALFAJORES, '0x7d91E51C8F218f7140188A155f5C75388630B6a8', 18, 'DAI', 'Dai Stablecoin');
exports.CUSD_CELO_ALFAJORES = new sdk_core_1.Token(sdk_core_1.ChainId.CELO_ALFAJORES, '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', 18, 'CUSD', 'Celo Dollar Stablecoin');
exports.CEUR_CELO_ALFAJORES = new sdk_core_1.Token(sdk_core_1.ChainId.CELO_ALFAJORES, '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F', 18, 'CEUR', 'Celo Euro Stablecoin');
// Ethereum Classic Tokens
exports.USDC_CLASSIC = new sdk_core_1.Token(sdk_core_1.ChainId.CLASSIC, '0xfdcC3dd6671eaB0709A4C0f3F53De9a333d80798', // SBC address
6, 'SBC', 'SBC');
// Ethereum Classic Tokens
exports.USC_CLASSIC = new sdk_core_1.Token(sdk_core_1.ChainId.CLASSIC, '0xDE093684c796204224BC081f937aa059D903c52a', // USC address
6, 'USC', 'USC');
// Ethereum Classic Mordor Tokens
exports.USDC_CLASSIC_MORDOR = new sdk_core_1.Token(sdk_core_1.ChainId.CLASSIC_MORDOR, '0xDE093684c796204224BC081f937aa059D903c52a', 6, 'USC', 'USC');
// Avalanche Tokens
exports.DAI_AVAX = new sdk_core_1.Token(sdk_core_1.ChainId.AVALANCHE, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18, 'DAI.e', 'DAI.e Token');
exports.USDC_AVAX = new sdk_core_1.Token(sdk_core_1.ChainId.AVALANCHE, '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', 6, 'USDC', 'USDC Token');
// Base Tokens
exports.USDC_BASE = new sdk_core_1.Token(sdk_core_1.ChainId.BASE, '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA', 6, 'USDbC', 'USD Base Coin');
// Base Goerli Tokens 
exports.USDC_BASE_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.BASE_GOERLI, '0x853154e2A5604E5C74a2546E2871Ad44932eB92C', 6, 'USDbC', 'USD Base Coin');
// Gnosis Tokens
exports.USDC_ETHEREUM_GNOSIS = new sdk_core_1.Token(sdk_core_1.ChainId.GNOSIS, '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83', 6, 'USDC', 'USDC from Ethereum on Gnosis');
exports.WXDAI_GNOSIS = new sdk_core_1.Token(sdk_core_1.ChainId.GNOSIS, '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d', 18, 'WXDAI', 'Wrapped XDAI on Gnosis');
exports.WBTC_GNOSIS = new sdk_core_1.Token(sdk_core_1.ChainId.GNOSIS, '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252', 8, 'WBTC', 'Wrapped BTC from Ethereum on Gnosis');
// Moonbeam Tokens
exports.USDC_MOONBEAM = new sdk_core_1.Token(sdk_core_1.ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'USDC', 'USD Coin bridged using Multichain');
exports.WGLMR_MOONBEAM = new sdk_core_1.Token(sdk_core_1.ChainId.MOONBEAM, '0xAcc15dC74880C9944775448304B263D191c6077F', 18, 'WGLMR', 'Wrapped GLMR');
exports.DAI_MOONBEAM = new sdk_core_1.Token(sdk_core_1.ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'DAI', 'Dai on moonbeam bridged using Multichain');
exports.WBTC_MOONBEAM = new sdk_core_1.Token(sdk_core_1.ChainId.MOONBEAM, '0x922D641a426DcFFaeF11680e5358F34d97d112E1', 8, 'WBTC', 'Wrapped BTC bridged using Multichain');
class TokenProvider {
    constructor(chainId, multicall2Provider) {
        this.chainId = chainId;
        this.multicall2Provider = multicall2Provider;
    }
    async getTokenSymbol(addresses, providerConfig) {
        let result;
        let isBytes32 = false;
        try {
            result =
                await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                    addresses,
                    contractInterface: IERC20Metadata__factory_1.IERC20Metadata__factory.createInterface(),
                    functionName: 'symbol',
                    providerConfig,
                });
        }
        catch (error) {
            util_1.log.error({ addresses }, `TokenProvider.getTokenSymbol[string] failed with error ${error}. Trying with bytes32.`);
            const bytes32Interface = new abi_1.Interface([
                {
                    inputs: [],
                    name: 'symbol',
                    outputs: [
                        {
                            internalType: 'bytes32',
                            name: '',
                            type: 'bytes32',
                        },
                    ],
                    stateMutability: 'view',
                    type: 'function',
                },
            ]);
            try {
                result =
                    await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                        addresses,
                        contractInterface: bytes32Interface,
                        functionName: 'symbol',
                        providerConfig,
                    });
                isBytes32 = true;
            }
            catch (error) {
                util_1.log.fatal({ addresses }, `TokenProvider.getTokenSymbol[bytes32] failed with error ${error}.`);
                throw new Error('[TokenProvider.getTokenSymbol] Impossible to fetch token symbol.');
            }
        }
        return { result, isBytes32 };
    }
    async getTokenDecimals(addresses, providerConfig) {
        return this.multicall2Provider.callSameFunctionOnMultipleContracts({
            addresses,
            contractInterface: IERC20Metadata__factory_1.IERC20Metadata__factory.createInterface(),
            functionName: 'decimals',
            providerConfig,
        });
    }
    async getTokens(_addresses, providerConfig) {
        const addressToToken = {};
        const symbolToToken = {};
        const addresses = (0, lodash_1.default)(_addresses)
            .map((address) => address.toLowerCase())
            .uniq()
            .value();
        if (addresses.length > 0) {
            const [symbolsResult, decimalsResult] = await Promise.all([
                this.getTokenSymbol(addresses, providerConfig),
                this.getTokenDecimals(addresses, providerConfig),
            ]);
            const isBytes32 = symbolsResult.isBytes32;
            const { results: symbols } = symbolsResult.result;
            const { results: decimals } = decimalsResult;
            for (let i = 0; i < addresses.length; i++) {
                const address = addresses[i];
                const symbolResult = symbols[i];
                const decimalResult = decimals[i];
                if (!(symbolResult === null || symbolResult === void 0 ? void 0 : symbolResult.success) || !(decimalResult === null || decimalResult === void 0 ? void 0 : decimalResult.success)) {
                    util_1.log.info({
                        symbolResult,
                        decimalResult,
                    }, `Dropping token with address ${address} as symbol or decimal are invalid`);
                    continue;
                }
                const symbol = isBytes32
                    ? (0, strings_1.parseBytes32String)(symbolResult.result[0])
                    : symbolResult.result[0];
                const decimal = decimalResult.result[0];
                addressToToken[address.toLowerCase()] = new sdk_core_1.Token(this.chainId, address, decimal, symbol);
                symbolToToken[symbol.toLowerCase()] =
                    addressToToken[address.toLowerCase()];
            }
            util_1.log.info(`Got token symbol and decimals for ${Object.values(addressToToken).length} out of ${addresses.length} tokens on-chain ${providerConfig ? `as of: ${providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber}` : ''}`);
        }
        return {
            getTokenByAddress: (address) => {
                return addressToToken[address.toLowerCase()];
            },
            getTokenBySymbol: (symbol) => {
                return symbolToToken[symbol.toLowerCase()];
            },
            getAllTokens: () => {
                return Object.values(addressToToken);
            },
        };
    }
}
exports.TokenProvider = TokenProvider;
const DAI_ON = (chainId) => {
    switch (chainId) {
        case sdk_core_1.ChainId.MAINNET:
            return exports.DAI_MAINNET;
        case sdk_core_1.ChainId.GOERLI:
            return exports.DAI_GOERLI;
        case sdk_core_1.ChainId.SEPOLIA:
            return exports.DAI_SEPOLIA;
        case sdk_core_1.ChainId.OPTIMISM:
            return exports.DAI_OPTIMISM;
        case sdk_core_1.ChainId.OPTIMISM_GOERLI:
            return exports.DAI_OPTIMISM_GOERLI;
        case sdk_core_1.ChainId.ARBITRUM_ONE:
            return exports.DAI_ARBITRUM;
        case sdk_core_1.ChainId.ARBITRUM_GOERLI:
            return exports.DAI_ARBITRUM_GOERLI;
        case sdk_core_1.ChainId.POLYGON:
            return exports.DAI_POLYGON;
        case sdk_core_1.ChainId.POLYGON_MUMBAI:
            return exports.DAI_POLYGON_MUMBAI;
        case sdk_core_1.ChainId.CELO:
            return exports.DAI_CELO;
        case sdk_core_1.ChainId.CELO_ALFAJORES:
            return exports.DAI_CELO_ALFAJORES;
        case sdk_core_1.ChainId.MOONBEAM:
            return exports.DAI_MOONBEAM;
        case sdk_core_1.ChainId.BNB:
            return exports.DAI_BNB;
        case sdk_core_1.ChainId.AVALANCHE:
            return exports.DAI_AVAX;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.DAI_ON = DAI_ON;
const USDT_ON = (chainId) => {
    switch (chainId) {
        case sdk_core_1.ChainId.MAINNET:
            return exports.USDT_MAINNET;
        case sdk_core_1.ChainId.GOERLI:
            return exports.USDT_GOERLI;
        case sdk_core_1.ChainId.OPTIMISM:
            return exports.USDT_OPTIMISM;
        case sdk_core_1.ChainId.OPTIMISM_GOERLI:
            return exports.USDT_OPTIMISM_GOERLI;
        case sdk_core_1.ChainId.ARBITRUM_ONE:
            return exports.USDT_ARBITRUM;
        case sdk_core_1.ChainId.BNB:
            return exports.USDT_BNB;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.USDT_ON = USDT_ON;
const USDC_ON = (chainId) => {
    switch (chainId) {
        case sdk_core_1.ChainId.MAINNET:
            return exports.USDC_MAINNET;
        case sdk_core_1.ChainId.GOERLI:
            return exports.USDC_GOERLI;
        case sdk_core_1.ChainId.SEPOLIA:
            return exports.USDC_SEPOLIA;
        case sdk_core_1.ChainId.OPTIMISM:
            return exports.USDC_OPTIMISM;
        case sdk_core_1.ChainId.OPTIMISM_GOERLI:
            return exports.USDC_OPTIMISM_GOERLI;
        case sdk_core_1.ChainId.ARBITRUM_ONE:
            return exports.USDC_ARBITRUM;
        case sdk_core_1.ChainId.ARBITRUM_GOERLI:
            return exports.USDC_ARBITRUM_GOERLI;
        case sdk_core_1.ChainId.POLYGON:
            return exports.USDC_POLYGON;
        case sdk_core_1.ChainId.POLYGON_MUMBAI:
            return exports.USDC_POLYGON_MUMBAI;
        case sdk_core_1.ChainId.GNOSIS:
            return exports.USDC_ETHEREUM_GNOSIS;
        case sdk_core_1.ChainId.MOONBEAM:
            return exports.USDC_MOONBEAM;
        case sdk_core_1.ChainId.BNB:
            return exports.USDC_BNB;
        case sdk_core_1.ChainId.AVALANCHE:
            return exports.USDC_AVAX;
        case sdk_core_1.ChainId.BASE:
            return exports.USDC_BASE;
        case sdk_core_1.ChainId.BASE_GOERLI:
            return exports.USDC_BASE_GOERLI;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.USDC_ON = USDC_ON;
const WNATIVE_ON = (chainId) => {
    return util_1.WRAPPED_NATIVE_CURRENCY[chainId];
};
exports.WNATIVE_ON = WNATIVE_ON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3Rva2VuLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw0Q0FBK0M7QUFFL0Msb0RBQTREO0FBQzVELGdEQUFtRDtBQUNuRCxvREFBdUI7QUFFdkIsMkZBQXdGO0FBQ3hGLGtDQUF1RDtBQStCdkQsb0VBQW9FO0FBQ3ZELFFBQUEsWUFBWSxHQUFHLElBQUksZ0JBQUssQ0FDbkMsa0JBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7QUFDVyxRQUFBLFlBQVksR0FBRyxJQUFJLGdCQUFLLENBQ25DLGtCQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxDQUFDLEVBQ0QsTUFBTSxFQUNOLFlBQVksQ0FDYixDQUFDO0FBQ1csUUFBQSxZQUFZLEdBQUcsSUFBSSxnQkFBSyxDQUNuQyxrQkFBTyxDQUFDLE9BQU8sRUFDZiw0Q0FBNEMsRUFDNUMsQ0FBQyxFQUNELE1BQU0sRUFDTixhQUFhLENBQ2QsQ0FBQztBQUNXLFFBQUEsV0FBVyxHQUFHLElBQUksZ0JBQUssQ0FDbEMsa0JBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCLENBQUM7QUFDVyxRQUFBLFdBQVcsR0FBRyxJQUFJLGdCQUFLLENBQ2xDLGtCQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsS0FBSyxFQUNMLFNBQVMsQ0FDVixDQUFDO0FBQ1csUUFBQSxXQUFXLEdBQUcsSUFBSSxnQkFBSyxDQUNsQyxrQkFBTyxDQUFDLE9BQU8sRUFDZiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLEtBQUssRUFDTCxTQUFTLENBQ1YsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHLElBQUksZ0JB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