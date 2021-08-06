// menghitung luas lingkaran
function luasLingkaran(jari) {
    return 3.14 * jari * jari;
}

// menghitung keliling lingkaran
function kelilingLingkaran(jari) {
    return 2 * 3.14 * jari; 
}

// jari-jari 10
console.log("--------------");
console.log("jari-jari = 10");
var r = 10
var luas = luasLingkaran(r);
console.log('luas = ' + luas);

var r = 10
var keliling  = Math.round(kelilingLingkaran(r));
console.log('keliling = ' + keliling);

// jari-jari 8
console.log("-------------");
console.log("jari-jari = 8");
var r = 8
var luas = luasLingkaran(r);
console.log('luas = ' + luas);

var r = 8
var keliling = Math.round(kelilingLingkaran(r));
console.log('keliling = ' + keliling);

// jari-jari 7
console.log("-------------");
console.log("jari-jari = 7");
var r = 7
var luas = luasLingkaran(r);
console.log('luas = ' + luas);

var r = 7
var keliling = Math.round(kelilingLingkaran(r));
console.log('keliling = ' + keliling);

// jari-jari 5
console.log("-------------");
console.log("jari-jari = 5");
var r = 5
var luas = luasLingkaran(r);
console.log('luas = ' + luas);

var r = 5
var keliling = Math.round(kelilingLingkaran(r));
console.log('keliling = ' + keliling);