export const onPieceDrop = (sourceSquare: string, targetSquare : string, piece: string) =>  {
    return true
}

function makeAMove(move: string | { from: string; to: string; promotion?: string | undefined; }) {
    const gameCopy = game;
    const result = gameCopy.move(move);
    setGame(new Chess(result.after));
    console.log(game, result, gameCopy)
    return result; // null if the move was illegal, the move object if the move was legal
}

// function makeRandomMove() {
//     const possibleMoves = game.moves();
//     if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0)
//         return; // exit if the game is over
//     const randomIndex = Math.floor(Math.random() * possibleMoves.length);
//     makeAMove(possibleMoves[randomIndex]);
// }

// function onDrop(sourceSquare: string, targetSquare : string, piece: string) {
//     const move = makeAMove({
//         from: sourceSquare,
//         to: targetSquare,
//         // promotion: "q", // always promote to a queen for example simplicity
//     });
    
//     return true;
//     // illegal move
//     if (move === null) return false;
//     setTimeout(makeRandomMove, 200);
// }