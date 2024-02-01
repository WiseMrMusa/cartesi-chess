import { Chessboard } from "react-chessboard";
import { useState } from "react";
import { Chess } from "chess.js";
import { onPieceDrop } from '../../lib/chess/chesslogic';

export default function PlayRandomMoveEngine() {
    const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    // const FEN = 'rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3'; // Checkmate
    // const FEN = '4k3/4P3/4K3/8/8/8/8/8 b - - 0 78'; // Stalemate
    const [game, setGame] = useState(new Chess(FEN));

    function makeAMove(move: string | { from: string; to: string; promotion?: string | undefined; }) {
        const gameCopy = game;
        const result = gameCopy.move(move);
        setGame(new Chess(result.after));
        console.log(game, result, gameCopy)
        return result; // null if the move was illegal, the move object if the move was legal
    }

    function makeRandomMove() {
        const possibleMoves = game.moves();
        if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0)
            return; // exit if the game is over
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        makeAMove(possibleMoves[randomIndex]);
    }

    function onDrop(sourceSquare: string, targetSquare : string, piece: string) {
        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            // promotion: "q", // always promote to a queen for example simplicity
        });
        
        return true;
        // illegal move
        if (move === null) return false;
        setTimeout(makeRandomMove, 200);
    }

    return <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
    // return <Chessboard position={FEN} onPieceDrop={onDrop}  />;
}

export const ChessGame = () => {
    const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    const [game, setGame] = useState<Chess>(new Chess(FEN));

    const onPieceDrop = (sourceSquare: string, targetSquare: string, piece: string) => {
        makeAMove({from: sourceSquare, to: targetSquare})
        return true;
    }

    const makeAMove = (move: string | { from: string; to: string; promotion?: string | undefined; }) => {
        const gameCopy = game;
        const result = gameCopy.move(move);
        setGame(new Chess(result.after));
        return result; // null if the move was illegal, the move object if the move was legal
    }

    return(
        <Chessboard position={game.fen()} onPieceDrop={onPieceDrop} showBoardNotation boardOrientation="black" />
    )
}