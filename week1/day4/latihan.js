// A. Soal String
// Soal No. 1 (Membuat kalimat)
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';

var combineWord = word.concat(" ",second," ",third," ",fourth," ".fifth," ",sixth," ",seventh)
console.log(combineWord)

// No.2 Mengurai kalimat (Akses karakter dalam string)
var sentence = "I am going to be Web Developer"; 

var exampleFirstWord = sentence[0] ;  // I
var secondWord = sentence[2] + sentence[3]  ; // am
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];; // going 
var fourthWord = sentence[11] + sentence[12]; // to 
var fifthWord = sentence[14] + sentence[15]; // be 
var sixthWord = sentence[17] + sentence[18] + sentence[19]; // Web 
var seventhWord = sentence[21] + sentence[22] + sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28] + sentence[29]; // Developer 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 

// No.3 Mengurai Kalimat dan Menentukan Panjang String
var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence3.substring(5,15); // do your own! 
var thirdWord3 = sentence3.substring(17,19); // do your own! 
var fourthWord3 = sentence3.substring(20,22); // do your own! 
var fifthWord3 = sentence3.substring(23,27); // do your own! 

var firstWordLength = exampleFirstWord3.length
var secondWordLength = secondWord3.length
var thirdWordLength = thirdWord3.length
var fourthWordLength = fourthWord3.length
var fifhtWordLength = fifthWord3.length
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifhtWordLength);

// B. Soal Function
// Soal no 1
function teriak() {
    //your code
    teriak = "Halo Sanbers!"
    return teriak
  }
  
  // TEST CASE
  console.log(teriak()) // "Halo Sanbers!" 

// Soal no2
function kalikan(num1, num2) {
    // your code
    kalikan = num1*num2
    return kalikan
  }
  
  console.log(kalikan(4, 12)) // 48

//  Soal no3
function introduce(name, age, address, hobby) {
  // your code
  console.log('Nama saya '+name+', '+'umur saya '+age+', '+'alamat saya di '+address+', '+'dan saya punya hobby yaitu '+hobby+'!')
}

 
 // TEST CASES
console.log(introduce("Agus", 30, "Jogja", "Gaming")) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jogja, dan saya punya hobby yaitu Gaming!" 

// C. Soal Conditional
// If-Else
var nama = "John";
var peran = "Guard";

if (nama == "") {
    console.log("Nama harus diisi!");
} else if (peran == "") {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else if (peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
} else if (peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
} else if (peran == "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
}



// D. Soal Looping
// Looping While
console.log("LOOPING PERTAMA");
var count = 2;
while (count <= 20) {
  console.log(count + ' - I love coding');
  count += 2;
}

console.log("LOOPING KEDUA");
count = 20;
while (count >= 2) {
  console.log(count + ' - I will become a mobile developer');
  count -= 2;
}