const bcrypt = require('bcrypt');

// const myPassword = 'password';
// const hash = bcrypt.hashSync(myPassword, 5);
// console.log(hash)

// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash('password', 5, function(err, hash) {
//         console.log(hash)
//     })
//     console.log(salt)
// })

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync('password', salt);
// console.log(salt);

// bcrypt.compare('password', hash, function (err, result) {
//     console.log('password:', result);
// })

// bcrypt.compare('falsy', hash, function (err, result) {
//     console.log('falsy:', result);
// })

async function hashTest(password) {
    const hash = await bcrypt.hash(password, 5);

    const result = await bcrypt.compare(password, hash);
    console.log(result);
}

hashTest('password')