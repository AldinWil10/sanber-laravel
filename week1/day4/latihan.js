// Soal String
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

// Soal Function
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