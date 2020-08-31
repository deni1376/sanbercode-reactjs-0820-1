//soal 1
let r
const phi = r % 7 === 0 ? 22/7 : 3.14;
const luaslingkaran =r=> phi*r*r

const kelilinglingkaran=r=> 2*phi*r

let x= 7
console.log("==== soal 1 ====")
console.log ("Jari -jari : "+x)
console.log("Luas lingkaran : "+ luaslingkaran(x))
console.log("Keliling lingkaran : "+ kelilinglingkaran(x))

//soal 2
let kalimat =""
const tambahkata=(kata)=>{
    kalimat+=`${kata}`
}
tambahkata('saya ')
tambahkata('adalah ')
tambahkata('seorang ')
tambahkata('frontend ')
tambahkata('developer ')
console.log("==== soal 2 ====")
console.log(kalimat)


//soal 3
const newFunction = function literal(firstName, lastName){
    return {
    firstName,
    lastName,
    fullName(){
    console.log(firstName + " " + lastName)
    return 
    }
    }
   }
   console.log("==== soal 3 ====")
   newFunction("William", "Imoh").fullName()

//soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
   }
   //driver code
   const {firstName, lastName, destination, occupation} = newObject;
   console.log("==== soal 4 ====")
   console.log(firstName, lastName, destination, occupation)

//soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log("==== soal 5 ====")
console.log(combined)