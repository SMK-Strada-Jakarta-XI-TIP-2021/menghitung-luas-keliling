function luasLingkaran (jari) {
    if (jari % 7 === 0) {
        luaslingkaranPertama = Math.round (jari * jari * 3.14);
        return luaslingkaranPertama;
    } else {
        luaslingkaranKedua = jari * jari * 3.14;
        return luaslingkaranKedua
    }
}

function kelilingLingkaran (jari) {
    if (jari % 7 === 0) {
        kelilinglingkaranPertama = Math.round (2 * jari * 3.14);
        return kelilinglingkaranPertama;
    
    } else {
        kelilinglingkaranKedua = 2 * jari * 3.14;
        return kelilinglingkaranKedua;
    }
}

console.log ('1 .' + 'Luas = ' + luasLingkaran(10))
console.log ('keliling = ' + kelilingLingkaran(10))
console.log ('2 .' + 'Luas = ' + luasLingkaran(8))
console.log ('keliling = ' + kelilingLingkaran(8))
console.log ('3 .' + 'Luas = ' + luasLingkaran(7))
console.log ('keliling = ' + kelilingLingkaran(7))
console.log ('4 .' + 'Luas = ' + luasLingkaran(5))
console.log ('keliling = ' + kelilingLingkaran(5))