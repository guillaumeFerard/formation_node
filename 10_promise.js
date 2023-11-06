
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    new Promise((resolve, reject) => { 
        setTimeout(() => console.log("coucou"),
        2000
        )
     })
};

sleep()
module.exports = {sleep};