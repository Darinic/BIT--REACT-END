//template literals

// const vardas= "jonas";
// const lname= 'jonaitis'

// const kiekis = 12;

// const kaina= 14;

// console.log(`Mano vardas ${vardas}, o pavardė ${lname}`);
// console.log(`Suma yra: ${kiekis*kaina}`)

//Object destructing

// let [kiekis, pavadinimas, kaina] = [12, 'Kompiuteris', 123.456];

// kiekis= 14

// console.log(kiekis)

// console.log(kaina)

// //Object

// const student= {
//     id:5,
//     firstName: 'Karolis',
//     lastName: 'Petraitis',
//     average:8
// }

// const {id, firstName:fn,lastName:ln} = student

// console.log(fn)

// for of, for in

// const items = [1,true, 'Ieva'];

// for(const element of items)
//     console.log(items[element])


//     const students= [
//         {
//             id:1,
//             firstName:'Jonas',
//             lname:'Jonaitis',
//             shool:'BIT',
//             subjects:{
//                 js:10,
//                 react:8,
//                 vue:5
//             }
//         },
//         {
//             id:2,
//             firstName:'Petras',
//             lname:'Petraitis',
//             shool:'BIT',
//             subjects:{
//                 js:6,
//                 react:5,
//                 vue:2
//             }
//         },
//         {
//             id:3,
//             firstName:'Vardenis',
//             lname:'Pavardenis',
//             shool:'BIT',
//             subjects:{
//                 js:10,
//                 react:10,
//                 vue:7
//             }
//         }
//     ]

// for(let student of students) {
//     for(let studentData in student) {
//         if(studentData =='subjects') {
//             console.log('Mokomieji dalykai:')
//             for(let subject in student[studentData])
//             console.log(`${subject}: ${student[studentData][subject]}`)
//         } else {
//             console.log(student[studentData])
//         }
//         }
//     }

// function sum(first, second) {
//     console.log(first+second)
// }
// sum(12,14)

// function suma(...numbers) {
//     let total = numbers.reduce((x,y)=>x+y)
//     console.log(total)
// }
// suma(12,45,78,56,14,78)

//includes

// let data = ['Ieva', 'Tomas', 'Karolis']

// if(data.includes('Algis')) {
//     console.log('Kontaktas surastas')
// }else {
//     console.log('Kontaktas nerastas')
// }
// import Demo from "./module/Demo";

// Demo()
import renderForm from "./module/renderForm";
import searchCode from "./module/searchCode"

renderForm()
searchCode()

//Parašyti funkciją displayName() kuri priima objektą kaip argumentą ir atspausdina žmogaus vardą ir pavardę. Naudoti object destructuring funkcijos argumentą.
//  Ir panaudoti template strings, kad atspausdinti vardą ir pavardę.  