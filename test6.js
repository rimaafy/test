let depth = prompt("Masukkan kedalaman level:");

for (let i = 0; i < depth; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += binomialCoefficient(i, j) + " ";
    }
    console.log(row);
}

function binomialCoefficient(n, k) {
    if (k == 0 || k == n) {
        return 1;
    }
    return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
}
