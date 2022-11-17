import { IEthereumProvider } from "./types/Provider";

class RobinhoodWalletDetectProvider {
  constructor() {}

  async getProvider(): IEthereumProvider {
    const robinhoodWalletInjectedProvider =
      this.robinhoodWalletInjectedProvider;
    if (robinhoodWalletInjectedProvider) {
      return robinhoodWalletInjectedProvider;
    }

    // if we do not have injected provider, that means:
    // 1. Users are in mobile safari, we take users to app/google store
    // 2. Users are on Desktop, we show wallet connect
    // 3. Users are in mobile native dApp, we should deeplink into RH Wallet with wallet connect deeplink
  }

  get robinhoodWalletInjectedProvider(): IEthereumProvider | undefined {
    const provider = window.ethereum;
    if (!provider) {
      return undefined;
    }

    if (!provider.isRobinhoodMobileWallet) {
      return undefined;
    }

    return provider;
  }
}

export { RobinhoodWalletDetectProvider };
