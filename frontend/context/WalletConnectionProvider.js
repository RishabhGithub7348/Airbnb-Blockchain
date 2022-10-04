import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import {PhantomWalletAdapter} from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';


const connection = "https://shy-distinguished-cloud.solana-devnet.discover.quiknode.pro/bdea7fa05cf2efdc90f0db7c17b24316c5f98436/"


const WalletConnectionProvider = ({ children }) => {
    const endpoint = useMemo(() => connection, []);
    
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )

}

export default WalletConnectionProvider;