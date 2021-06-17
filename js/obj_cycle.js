const obj = {
    name: 'Sergey',
    hasTale: true,
    color: 'Pink',
    gender: 'male',
    noseColor: 'Carrot color',
    // key: 123
}

let objCopy = {};

for (let key in obj) {

    objCopy[key] = obj[key];

    // console.log(key, obj[key], obj.key);

    // if(key === 'hasTale') {
    //     console.log(key + ': ' + obj[key]);
    //     break;
    // }
}


objCopy.color = 'black';

console.log(obj)
console.log(objCopy)