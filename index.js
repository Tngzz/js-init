
//let is used to set a scoped variable
let lastname
lastname = 'Tanguy'

let birthdate = new Date (2000, 3, 13)
let myBirthDate = birthdate //Objects are not copyed but creates a reference

myBirthDate.setFullYear(2225)

console.log(birthdate)

const primitiveAffecation = () => {
    let lastname = 'Tanguy'
    return lastname
}

const objectCopy = (aData) => {
    return {...aData} //Spread Operator
}

const usingPrototypePattern = (aDate) => {
    
    if (aDate instanceof Date){
    
    const anonymousDate = new Date()
    anonymousDate.setDate(aDate.getDate())
    anonymousDate.setMonth(aDate.getMonth())
    anonymousDate.setFullYear(aDate.getFullYear())
    
    return anonymousDate

    }

    throw new TypeError("'aDate' is not a correct Date Type")
}

const usingArrays = () => {
    const myArray = [1, 2, 3, 5, 8, 13, 21, 34,]
    myArray.push(55)
    myArray.pop() //Supprimer le dernier élement du tableau

    return myArray
}

const objectArray = [
    {
        "id": "1fe34",
        "name": "Bannanes",
        "stock": 12
    },
    {
        "id": "4ae36",
        "name": "Café en grain",
        "stock": 6
    },
    {
        "id": "3cc52",
        "name": "Raviolis",
        "stock": 3
    },
]

module.exports = {
    primitiveAffecation,
    objectCopy,
    usingPrototypePattern,
    usingArrays,
    objectArray,
    myBirthDate,
    birthdate
    
} 