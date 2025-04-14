const g = 1;
var y = 4;
var u = function add(g, y) {
    y = y + g;
    return y;
}
var y = u(g, y)
console.log(y);
