function ChessBoard(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ((j + i) % 2 == 0) ? string += ' ' : string += '#';
        }
        string += '\n'
    }
    console.log(string)
}
ChessBoard(8);