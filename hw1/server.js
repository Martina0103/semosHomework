//import http
const http = require('http');
//import objects
const objects = require('./objects');
//import arrays
const arrays = require('./arrays');
//import fileSystem
//const fileSystem = require('./fileSystem');
const {writeToFile, readFromFile} = require('./fileSystem');


const server = http.createServer();

//povikuvanje na property od objects
console.log(objects.objekt.intProperty); //13
//console.log(objects.objekt.funkProperty()); //Function property in object

//povikuvanje na 7mi element od nizata
console.log(arrays.niza[6]); //Martina
console.log(arrays.array[2]); //dva

//koristam dodatna promenliva, koga flag = true se zapishuva vo niza.txt, inaku vo objekt.txt
const flag = true;
if(flag){
    let i;
    const pat = 'niza.txt';
    let tekst = arrays.niza[0];
    for(i=1; i<arrays.niza.length;i++){
        
        tekst = tekst+" "+arrays.niza[i];
    }
    writeToFile(pat, tekst).then(rezultat => {
        console.log(rezultat);
    })
    readFromFile(pat).then(rezultat => {
        console.log(rezultat);
    })
    
}else{
    let i;
    //dobivame niza od objekti, potoa ja naogjame dolzinata
    const objNiza = Object.keys(objects.objekt);
    const objSize = objNiza.length;
    const pat = 'objekt.txt'
    let tekst = objNiza[0];
    for(i=1;i<objSize;i++){
        tekst = tekst+" "+objNiza[i];
    }
    writeToFile(pat, tekst).then(rezultat => {
        console.log(rezultat);
    })
    readFromFile(pat).then(rezultat => {
        console.log(rezultat);
    })
}

//1. Create a node server that runs on the 8080 port.
server.listen(8080, () => {
    console.log('Server is active, waiting for clients.')
})
