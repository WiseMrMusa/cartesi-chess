import PlayRandomMoveEngine, { ChessGame } from "@/components/chess/chess";
import { Layout } from "@/components/layout";

export default function Home() {
    return (
        <Layout>
            <div className="w-96">
                Hello World
                <PlayRandomMoveEngine />
                {/* <ChessGame /> */}
            </div>
        </Layout>
    )
}