import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import { siweClient } from '../lib/utils/siweClient';




export default function App({ Component, pageProps }: AppProps) {
    const config = createConfig(
      getDefaultConfig({
        // Required API Keys
        alchemyId: process.env.ALCHEMY_ID, // or infuraId
        walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID?? "",
        
        // Required
        appName: "Your App Name",
        
        // Optional
        appDescription: "Your App Description",
        appUrl: "https://family.co", // your app's url
        appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
      }),
      );
    
    
      return (
      <WagmiConfig config={config}>
        <siweClient.Provider>
          <ConnectKitProvider>
            <Component {...pageProps} />
          </ConnectKitProvider>
        </siweClient.Provider>
      </WagmiConfig>
    );
  }
//   const App = () => {
//   return (
//     <WagmiConfig config={config}>
//       <ConnectKitProvider>
//         /* Your App */
//         <ConnectKitButton />
//       </ConnectKitProvider>
//     </WagmiConfig>
//   );
// };

// const MyApp: AppType<{ session: Session | null; }> = ({
//   Component,
//   pageProps: { ...pageProps },
// }) => {
//   return (
//     <WagmiConfig client={client}>
//       <siweClient.Provider>
//         <ConnectKitProvider>
//           <Component {...pageProps} />
//         </ConnectKitProvider>
//       </siweClient.Provider>
//     </WagmiConfig>
//   );
// };