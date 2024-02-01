import { ChessGame } from "@/components/chess/chess";
import { Layout } from "@/components/layout";

export default function Home() {
    return (
        <Layout>
            <div className="w-2/4">
                <ChessGame />
            </div>
        </Layout>
    )
}