import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Play chess like your life depends on it</h1>
      <ConnectKitButton />
    </main>
  );
}
