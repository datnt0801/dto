// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

const arr = [
    {
        id: 0,
        value: 'dat'
    },
    {
        id: 2,
        value: 'thien'
    },
    {
        id: 1,
        value: 'quyen'
    },
    {
        id: 3,
        value: 'hong'
    }
]


arr.sort((a,b) => {
    return a.id - b.id 
}).reverse()
console.log(arr)

let result = arr.find((param) =>{
    return param.id > 1;
})

console.log(result)