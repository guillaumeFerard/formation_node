/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 * 
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 * 
 * Retournez un tableau contenant les 3 résultats
 * 
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 * 
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

//const {apiResponse} = require("./11_async");
const axios = require("axios");

const prom1 = axios.get("https://jsonplaceholder.typicode.com/todos/1")
const prom2 = axios.get("https://jsonplaceholder.typicode.com/todos/2")
const prom3 = axios.get("https://jsonplaceholder.typicode.com/todos/3")

const promises = [prom1, prom2, prom3]


const parallel = async () => {
    const urls = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/1"]
    const prom1 = axios.get(urls[0])
    const prom2 = axios.get(urls[1])
    const prom3 = axios.get(urls[2])
    //urls.map((e) => axios)

    let resp = await Promise.all([prom1, prom2, prom3]);
    console.log(resp)
}

parallel()

module.exports = {parallel};
