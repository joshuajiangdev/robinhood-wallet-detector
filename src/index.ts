import { RobinhoodWalletDetectProvider } from "./RobinhoodWalletDetectProvider";
import { IEthereumProvider } from "./types/Provider";

export { RobinhoodWalletDetectProvider } from "./RobinhoodWalletDetectProvider";

declare global {
  interface Window {
    RobinhoodWalletDetectProvider: typeof RobinhoodWalletDetectProvider;

    ethereum?: IEthereumProvider;
  }
}
