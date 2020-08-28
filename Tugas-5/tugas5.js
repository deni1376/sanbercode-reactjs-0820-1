//soal 1

function halo(){
    return "Halo Sanbers"
}
    
console.log(halo())

//soal 2
function kalikan(){
    return num1*num2
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) 

//soal 3
function introduce(){
return "Nama saya"+" "+name+","+" "+"umur saya "+" "+age+" ,"+" "+" alamat saya di"+" "+address+","+" "+"dan saya punya hobby yaitu"+" "+hobby+"!" 
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) 

//soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftaPeserta= {nama:arrayDaftarPeserta[0],jenis_kelamin:arrayDaftarPeserta[1],hobi:arrayDaftarPeserta[2],tahun_lahir:arrayDaftarPeserta[3]}
console.log(objectDaftaPeserta.nama)
console.log(objectDaftaPeserta.jenis_kelamin)
console.log(objectDaftaPeserta.hobi)
console.log(objectDaftaPeserta.tahun_lahir)

//soal 5
var buahbuahan=
[
  {
      nama: "strawberry",
      warna: "merah",
      "ada bijinya": "tidak",
      harga: 9000
  },
  {
      nama: "jeruk",
      warna: "oranye",
      "ada bijinya": "ada",
      harga: 8000
  },
  {
      nama: "Semangka",
      warna: "Hijau & Merah",
      "ada bijinya": "ada",
      harga: 10000
  },    
  {
      nama: "Pisang",
      warna: "Kuning",
      "ada bijinya": "tidak",
      harga: 5000
  }
]
console.log( "Data pertama:")
console.log(buahbuahan[0])

//soal 6
var dataFilm = []

function tambahfilm(namafilm,durasi,genre,tahun){
    dataFilm.push({nama: namafilm,durasi: durasi,genre: genre, tahun: tahun})
}
tambahfilm("Scoob!","1 jam 33 menit",'Action,Fantasy','2020')
console.log(dataFilm)

