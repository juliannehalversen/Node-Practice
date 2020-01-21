const axios = require('axios');
const fs = require('fs');

const fetchData = callback => {
    setTimeout(() => {
        callback('FetchData is done')
    }, 1500)
}

setTimeout(() => {
    console.log('Timer is done');
    fetchData(text => {
        console.log(text);
    })
}, 2000)

console.log('hello!');
console.log('hi!');


// the order will be hello, hi, timer is done, fetchdata is done. This is because the first two are asynchronous and then you are call fetchdata  in the set timeout function. 
// callback is a function because arguments are being passed (callback('fetchdata)). This is being assigned to a constant fetchData. there aren't paranthesis on callback
//  because it is the only parameter (arrow function rules). This fetchData callback text is being passed in setTimeout. 

//study closures and scope (could be on interview test)


async function getSnorlaxData(url) {
    return axios.get('https://pokeapi.co/api/v2/pokemon/snorlax')
    .then(function ({ data }) { //object destructuring
        // handle success
        return data;
    })
    /* .then(function({ sprites}) {
        return sprites
    } */
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

async function getPikachuData(url) {
    return axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function ({ data }) {
        // handle success
        return data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
};


/* var i = 0;

setInterval(() => {
    console.log(`iteration ${i}`)
    i++
}, 1000); */


async function main() {
    const snorlax = await getSnorlaxData();
    const pika = await getPikachuData();
    fs.writeFile('snorlax.json', JSON.stringify(snorlax), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}
main();