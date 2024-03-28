var penambahan = (6+9)  //15
var pengurangan = (9-6) //3
var perkalian = (9*6)   //54
var pembagian = (9/3)   //3
var hasilbagi = (3%2)   //1

//equal operator (==)
var angka = 100
console.log(angka == 100) // true
console.log(angka == 20) // false

// not equal
var sifat = "rajin"
console.log(sifat != "malas") // true
console.log(sifat != "bandel") //true 

// strict equal (membandingkan value dan tipe data)
var angka = 8
console.log(angka == "8") // true, padahal "8" adalah string.
console.log(angka === "8") // false, karena tipe data nya berbeda
console.log(angka === 8) // true 

// strict not equal (Kebalikan dari strict equal.)
var angka = 11
console.log(angka != "11") // false, padahal "11" adalah string
console.log(angka !== "11") // true, karena tipe datanya berbeda
console.log(angka !== 11) // false

// operator pembanding
var number = 17
console.log( number < 20 ) // true
console.log( number > 17 ) // false
console.log( number >= 17 ) // true, karena terdapat sama dengan
console.log( number <= 20 ) // true

// Operator Kondisional
// OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false
// AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true

console.log(penambahan)
console.log(pengurangan)
console.log(perkalian)
console.log(pembagian)
console.log(hasilbagi)