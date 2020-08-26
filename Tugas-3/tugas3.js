//soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKedua2 ="S"
var kataKedua3 = kataKedua.slice(1); 
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var kataKeempat2= kataKeempat.toUpperCase();
var gabung= kataPertama.concat(" ",kataKedua2,kataKedua3," ",kataKetiga," ",kataKeempat2)
console.log(gabung)

//soal 2
var a = Number( "1");
var b = Number("2");
var c = Number("4");
var d = Number("5");
var jumlah = a+b+c+d
console.log(jumlah)

//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var e = kalimat.substr(0, 3); 
var f = kalimat.substr(4,10);
var g = kalimat.substr(15,3);
var h = kalimat.substr(19,5);
var i = kalimat.substr(25,7);

console.log('Kata Pertama: ' + e); 
console.log('Kata Kedua: ' + f); 
console.log('Kata Ketiga: ' + g); 
console.log('Kata Keempat: ' + h); 
console.log('Kata Kelima: ' + i);

//soal 4
var nilai= 85
if ( nilai >= 80 ) {
    console.log("A")
} else if ( nilai>= 70 && nilai<80 ) {
    console.log("B")
} else if ( nilai>= 60 && nilai<70 ) {
    console.log("C")
} else if ( nilai>= 50 && nilai<60 ) {
    console.log("D")
} else if ( nilai<50){
    console.log("E")
}

//soal 5
var tanggal = 7;
var bulan = 5;
var tahun = 1996;
switch(bulan) {
    case 1:   { console.log(tanggal+" "+'Januari'+" "+tahun); break; }
    case 2:   { console.log(tanggal+" "+'Februari'+" "+tahun); break; }
    case 3:   { console.log(tanggal+" "+'Maret'+" "+tahun); break; }
    case 4:   { console.log(tanggal+" "+'April'+" "+tahun); break; }
    case 5:   { console.log(tanggal+" "+'Mei'+" "+tahun); break; }
    case 6:   { console.log(tanggal+" "+'Juni'+" "+tahun); break; }
    case 7:   { console.log(tanggal+" "+'Juli'+" "+tahun); break; }
    case 8:   { console.log(tanggal+" "+'Agustus'+" "+tahun); break; }
    case 9:   { console.log(tanggal+" "+'September'+" "+tahun); break; }
    case 10:  { console.log(tanggal+" "+'Oktober'+" "+tahun); break; }
    case 11:  { console.log(tanggal+" "+'November'+" "+tahun); break; }
    case 12:  { console.log(tanggal+" "+'Desember'+" "+tahun); break; }}