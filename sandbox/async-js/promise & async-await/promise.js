// That is a promise. A promise has 3 states. They are:

// Promise is pending: You don't know if you will get that phone until next week.
// Promise is resolved: Your mom really buy you a brand new phone.
// Promise is rejected: You don't get a new phone because your mom is not happy.

/* ES6 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    // short way
    const message = 'Hey friend, I have a new ' +
          phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
  
    // long way
//     return new Promise(
//         (resolve, reject) => { // fat arrow
//             const message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';

//             resolve(message);
//         }
//     );
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();