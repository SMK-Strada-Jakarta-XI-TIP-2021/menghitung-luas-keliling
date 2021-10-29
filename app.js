function luasLingkaran(jari) {
    return 3.14 * jari * jari;
}

// menghitung keliling lingkaran
function kelilingLingkaran(jari) {
    return 2 * 3.14 * jari; 
}

// jari-jari 10
console.log('');
console.log('');
console.log("jari-jari = 10");
var r = 10
var luas = luasLingkaran(r);
console.log('luas = ' + luas);

console.log('')
var r = 10
var keliling  = Math.round(kelilingLingkaran(r));
console.log('keliling = ' + keliling);

console.log('')
// jari-jari 8
console.log("-------------");
console.log("jari-jari = 8");
var r = 8
var luas = luasLingkaran(r);