function loopTriangle(n, tri, char) {
    if (n !== 0) {
        tri += char
        console.log(tri)
        loopTriangle(n - 1, tri, char)
    }
}
loopTriangle(10, '', '#');