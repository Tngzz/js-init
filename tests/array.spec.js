const {
    usingArrays, objectArray
} = require('./../index.js')

describe(`Array manipulation`, () => {
    let array
    
    beforeEach(() => {
        array = usingArrays()
    })

    it ('should have 8 items', () => {
        expect(array.length).toBe(8)
    })

    it ('should have 3 even values', () => {
        let evenValuesNumber = array.filter((value) => value % 2 === 0).lenght
    })

    it('should have a sum of 87', () => {
        const sum = array.reduce((acc, current) => acc + current, 0)
        expect(sum).toBe(87)
    })

    it('should have an odd sum of 43', () => {
        const oddSum = array
        .filter((value) => value % 2 !== 0) //Trier les nombres paires et impaires
        .reduce((acc, current) => acc + current, 0)
        expect(oddSum).toBe(43)
    })
    
    it('should have a global stock of 21', () => {
        //map + reduce
        const globalStock = objectArray
        
        .map(items => items.stock)
        .reduce((acc, current) => acc + current, 0)
        expect(globalStock).toBe(21)
    })

    it('should be sorted by id ascending', () => {
        const compareFn = (p1, p2) => p1.id.localeCompare(p2.id)
        const sortedArray = objectArray.sort(compareFn)
    
        expect(sortedArray[2].id).toBe('4ae36')
    })

    it('should be sorted by name descending', () => {
        const compareFn = (p1, p2) => (p1.name.localeCompare(p2.name))*-1
        const sortedArray = objectArray.sort(compareFn);
    
        expect(sortedArray[0].name).toBe('Raviolis');
    })

    it('should give an array of product with a stock gt 5', () => {
        //Original array must be mutated

        const workArray = [...objectArray]

        for (let i = 0; i < objectArray.length; i++) {
            if (workArray[i].stock < 5) {
                objectArray.splice(i,1)
            }
        }
        expect(objectArray.length).toBe(2)
    }) 
})
   


