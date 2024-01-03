const {primitiveAffecation, objectCopy, usingPrototypePattern, myBirthDate, birthdate} = require('./../index.js')
describe(`index.js`, () => {
    
    it (`Should return 'Tanguy'`, () => {
            expect(primitiveAffecation()).toBe('Tanguy')
    })
    
    it (`Should have the same reference`, () => {
        expect(birthdate).toStrictEqual(myBirthDate)
    })
    
    it (`Should have different reference`, () => {
      const theDate = new Date(2000,3 , 13)
      const otherDate = objectCopy(theDate)

      expect(theDate === otherDate).toBeFalsy()
    })
    
    it (`Should have different reference`, () => {
        const theDate = new Date(2000,3 , 13)
        const otherDate = objectCopy(theDate)
  
        expect(theDate === otherDate).toBeFalsy()

        const protoDate = usingPrototypePattern(theDate)

        expect(theDate === protoDate).toBeFalsy()
      })

    // it (`Should raised an exception if a dte is not passed`, () => {
    //     expect(usingPrototypePattern)
    // })
})