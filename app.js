function luasLingkaran(jari) {
    if (jari % 7 === 0) {
        luasSatu = Math.round(jari * jari * 3.14);
        return luasSatu;
    } else {
        luasDua = jari * jari * 3.14;
        return luasDua;
    }
}

function kelilingLingkaran(jari) {
    if (jari % 7 === 0) {
        kelilingSatu = Math.round(2 * jari * 3.14);
        return kelilingSatu;
    } else {
        kelilingDua = 2 * jari * 3.14;
        return kelilingDua;
    }

}

// luas dan kelilin jari = 10
console.log('jari - jari = 10')
console.log('Luas = ' + luasLingkaran(10));
console.log('Keliling = ' + kelilingLingkaran(10));
console.log('=============================');
console.log('                                 ');


// luas dan kelilin jari = 8
console.log('jari - jari = 8')
console.log('Luas = ' + luasLingkaran(8));
console.log('Keliling = ' + kelilingLingkaran(8));
console.log('=============================');
console.log('                                 ');


// luas dan kelilin jari = 7
console.log('jari - jari = 7')
console.log('Luas = ' + luasLingkaran(7));
console.log('Keliling = ' + kelilingLingkaran(7));
console.log('=============================');
console.log('                                 ');

// luas dan kelilin jari = 5
console.log('jari - jari = 5')
console.log('Luas = ' + luasLingkaran(5));
console.log('Keliling = ' + kelilingLingkaran(5));
console.log('=============================');
console.log('                                 ');