
type Color = 'Black' | 'White';
type FileChess = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game {
    private pieces = Game.makePieces()

    private static makePieces() {
        return [
            // Kinkgs
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            // Queens
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),

            // Bishops
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),
        ]
    }

}

abstract class Piece {
    protected position: Position;

    constructor(private readonly color: Color, file: FileChess, rank: Rank) {
        this.position = new Position(file, rank)
    }

    moveTo(position: Position) {
        this.position = position;
    }

    abstract canMove(position: Position): boolean;

}

class Position {
    constructor(private file: FileChess, private rank: Rank) { }

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }


}

class King extends Piece {

    canMove(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }

}

class Queen extends Piece { }
class Bishop extends Piece { }
class Knight extends Piece { }
class Rook extends Piece { }
class Pawn extends Piece { }