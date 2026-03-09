import { describe, it, expect } from "vitest";

const fizzbuzz = (number) =>{
    if(typeof number !== "number" || Number.isNaN(number)){
        throw new Error("parameter provided must be a number")
    }

    const multiplies = {3: 'fizz', 5: 'buzz'}
    let output = ''

    Object
        .entries(multiplies)
        .forEach(([multiplier, word]) =>{
            if(number % multiplier === 0) output += word
        })
    
        return output === '' ? number : output
}

describe('TEST Example with Fizzbuzz function', ()=>{
    it("should be a function", ()=>{
        expect(typeof fizzbuzz).toBe("function")
    })

    // it('should throw if not number is provided as parameter', ()=>{
    //     expect(()=>fizzbuzz()).toThrow()
    // })

    // it('should throw a specific message if not number is provided as parameter', ()=>{
    //     expect(()=>fizzbuzz()).toThrow("parameter provided must be a number")
    // })

    // it('should throw a specific message NAN is provided as parameter', ()=>{
    //     expect(()=>fizzbuzz(NaN)).toThrow("parameter provided must be a number")
    // })

    // it('should return 1 if number provided is 1', ()=>{
    //     expect(fizzbuzz(1)).toBe(1)
    // })

    // it('should return 2 if number provided is 2', ()=>{
    //     expect(fizzbuzz(2)).toBe(2)
    // })

    // it('should return "fizz" if number provided is 3', ()=>{
    //     expect(fizzbuzz(3)).toBe("fizz")
    // })

    // it('should return "fizz" if number provided is multiple of 3', ()=>{
    //     expect(fizzbuzz(6)).toBe("fizz")
    //     expect(fizzbuzz(9)).toBe("fizz")
    //     expect(fizzbuzz(12)).toBe("fizz")
    // })

    // it('should return "buzz" if number provided is multiple of 5', ()=>{
    //     expect(fizzbuzz(5)).toBe("buzz")
    //     expect(fizzbuzz(10)).toBe("buzz")
    // })

    // it('should return "fizzbuzz" if number provided is multiple of 15', ()=>{
    //     expect(fizzbuzz(15)).toBe("fizzbuzz")
    // })
})