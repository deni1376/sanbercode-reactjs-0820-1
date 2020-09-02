var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
var z=10000
var i=0
function baca(x){
    readBooks(x,books[i],function(x){
        if (i<books.length && x >0){
            i++
            baca(x)
        }
    })
}
baca(z)