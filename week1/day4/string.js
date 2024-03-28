// untuk deklarasi string perlu adanya ("...")
var sentences = "Javascript" 
console.log(sentences[0]) // "J"
console.log(sentences[2]) // "v"

// string properties
console.log(sentences.length)    // length of the sentence

// string methods
// .charAt([indeks])
console.log('Javascript'.charAt(3)); // 'a' sama seperti yang paling atas

// .concat([string])
var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck

//  .indexOf([substring[, fromIndex]])
var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0 berdasarkan huruf pertama string
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1

// .substring([indeks awal], [indeks akhir (optional)])
var car1 = 'Lykan Hypersport';
var car2 = car1.substr(3);
console.log(car2); //an Hypersport (mengambil car1 lalu sebagian menjadi car2)

// .substr([indeks awal], [jumlah karakter yang diambil (optional)])
var motor1 = 'zelda motor';
var motor2 = motor1.substr(2, 3);
console.log(motor2); // lda

var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU

var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(lower); // this letter is for you

// .trim() menghapus space kosong pada awal dan akhir string
var username    = ' administrator ';
var newUsername = username.trim(); 
console.log(newUsername) // 'administrator'