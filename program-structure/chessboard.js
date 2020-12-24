var chessBoard = function(size) {
    let hashval = '';
    let space = ' ';

    for (let i = 0; i < size; i++) {
        hashval += '\n';

        for (let j = 0; j < size; j++) {
            if ((i+j) % 2 == 0) {
                hashval += space;
            }
            else {
                hashval += '#';
            }
        }
    }
    console.log(hashval);
}(8);