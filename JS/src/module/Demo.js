const Demo = () => {
    // function count(a,b, callback) {
    //     callback()
    //     return a*b
    // }
    // const sayHello= function(){console.log('Hello')}

    // count(8,9, sayHello);

    // const getData() {
    //     fetch()
    // }

    // const printData = () => {
    //     console.log(data)
    // }

    // const createTable = () => {

    // }

//     const message = () => {
//         console.log('message appears afters 3 seconds')
//     }
//     setTimeout(message, 3000)
// }
// message()

// const nav = document.querySelector('nav');

// console.log(nav)

const movies = () => {
    let data = fetch('http://omdapi.com/?i=tt3896198&apikey=18c1a865&t=matrix')
    .then(res=>res.json())
    return data
}
const showData = async () => {
    let data = await movies()
    console.log(data)
}
showData()
}
export default Demo