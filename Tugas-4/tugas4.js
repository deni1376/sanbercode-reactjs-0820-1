//soal 1 Ascending
var flag = 2;
while(flag <= 20) {
  console.log(flag+" "+"-"+"I love coding"); 
  flag= flag + 2; 
}

//soal 1 Descending
var a= 20;
while(a >= 2) {
  console.log(a+" "+"-"+"I will become a frontend developer"); 
  a= a - 2; 
}

//soal  2
for(var b = 1; b <= 20; b++)
    {
        if((b%2)==0)
        {
            console.log(b+'- Berkualitas') 
        }
        else if ((b%2)==0 || (b%3)==0) 
        {
            console.log(b+ '- I Love Coding')
        }
        else if ((b%2)==1) 
        {
        console.log(b+ "- Santai")
        }
    }


//soal3
var row = 7;

for (var i = 1; i <= row; i++) {
	var result = '';
	for (var j = 1; j <= i; j++) {
        result+='#';
    }
	console.log(result);
}

//soal 4
var kalimat=["saya", "sangat", "senang", "belajar", "javascript"]
console.log(kalimat)

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
var daftarBuah2= daftarBuah.join(",")
var buah1 = daftarBuah2.slice(0,9)
var buah2 = daftarBuah2.slice(10,17)
var buah3 = daftarBuah2.slice(18,27)
var buah4 = daftarBuah2.slice(28,39)
var buah5 = daftarBuah2.slice(40,48)
console.log(buah1)
console.log(buah2)
console.log(buah3)
console.log(buah4)
console.log(buah5)


