// import React from 'react'
// import { render,screen } from "@testing-library/react";
import Center from "./Center";
//@ts-ignore
const mul = (a , b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  }
}

describe('Multiply function', () => {
  test('should Multiply 3 and 5 using mul function', () => {
  
    const result = mul(3, 5)
    expect(result).toBe(15)
  })

  test('should not Multiply if any of two values are not number', () => {
  
    const result = mul(3, '5')
    expect(result).toBeUndefined()
    expect(result).toBeFalsy()
  })
})
