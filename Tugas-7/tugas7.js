// soal 1 realese 0
var legs
var cold_blooded
class Animal {
    constructor(name) {
        this._name= name
        this._legs= legs 
        this._cold_blooded = cold_blooded
    }
    get name(){
        return this._name
    }
    set name(n){
        this.name=n
    }
    get legs(){
        return this._legs 
    }
    set legs(l){
        this._legs=l
    }
    get cold_blooded(){
        return this._cold_blooded
    }
    set cold_blooded(c){
        this._cold_blooded=c
    }
}

var sheep = new Animal("shaun");
sheep.legs= 4
sheep.cold_blooded=false
console.log("==== Soal 1 realese 0 ====")
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//soal 1 realese 1 inheritache class animal
class Ape extends Animal {
    constructor(name,legs) {
        super(name)
        this._legs= legs
    }
    get legs(){
        return this._legs 
    }
    set legs(l){
        this._legs=l
    }
      yell() {
        console.log("Auooo");
      }
    }
  
  class Frog extends Animal {
      jump() {
        console.log("hop hop");
      }
    } 
var sungokong = new Ape("kera sakti")
sungokong.legs= 2
sungokong.cold_blooded= sheep.cold_blooded
console.log("==== Soal 1 realese 1 ====")
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
sungokong.yell() // "Auooo"
var kodok = new Frog("buduk")
kodok.legs= sheep.legs
kodok.cold_blooded= sheep.cold_blooded
console.log(kodok._name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
kodok.jump() // "hop hop" 

//soal 2
var template
var timer
class Clock {
    constructor({template}){
        this.template= template;
        this.timer;
    }
    render(){
        var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
    }
    start(){
        this.render()
        this.timer = setInterval(this.render.bind(this),1000)
    }
    stop(){
        clearInterval(timer);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  