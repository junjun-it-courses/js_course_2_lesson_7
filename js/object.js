// const usersArr = [
//     {
//         firstName: 'Pavel',
//         lastName: 'Familija'
//     },
//     {
//         firstName: 'Sergey',
//         lastName: 'Dronov',
//         pets: [
//             {
//                 type: 'Dog',
//                 name: 'Sharik'
//             },
//             {
//                 type: 'Cat',
//                 name: 'Cat name'
//             },
//         ]
//     },
//     {
//         firstName: 'Daria',
//         lastName: 'Example'
//     },
// ]
// console.log(usersArr)
//
//
// let pet = usersArr[1].pets[0]
// pet.name = 'Hleb';
// console.log(pet);
//
// usersArr[1].lastName = 'Example';

// let user = usersArr[1];
// user.lastName = 'Example'
// console.log(user)


// const obj1 = {
//     firstName: 'Pavel',
//     lastName: 'Familija'
// }
//
// const obj2 = obj1;
// const obj3 = obj2;
// const obj4 = obj3;
//
// obj3.lastName = 'Shaitan';
//
// console.log(obj1, obj2, obj3, obj4)


// function getDogWords() {
//     return 'Gav-gav';
// }
// let dogHasChildren = true;
//
// const dog = {
//     name: 'Vova',
//     hasTale: true,
//     color: 'brown',
//     gender: 'male',
//     noseColor: 'black',
//     whatsTheDogSay: getDogWords(),
//     '2nd dog son': 'Pretty little puppy',
//     [2 * 2 + ' puppies age']: 'some string',
//     avChildrenAge: 2 * 2,
//     avChildrenQty: dogHasChildren ? 2 : 0,
//     childrenNames: ['Dragon', 'Alex'],
//     children1 : {
//         name: 'Dragon',
//         hasTale: true,
//         color: 'brown',
//         gender: 'male',
//         noseColor: 'black',
//         children1: {
//             name: 'Shaitan',
//             hasTale: true,
//             color: 'black',
//             gender: 'male',
//             noseColor: 'pink',
//         }
//     },
//     voice: function () {
//         let dogWords = getDogWords();
//         console.log(dogWords);
//     },
//
//     someFunc() {
//         console.log('some string')
//     },
//
// }

// console.log(dog)
// dog.voice()

// const cat = {
//     name: 'Sergey',
//     hasTale: true,
//     color: 'Pink',
//     gender: 'male',
//     noseColor: 'Carrot color',
// }
//
//
// console.log(dog, cat)