"use strict"

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0

  arr.forEach((i) => {
    if (i < min) min = i
  })
  arr.forEach((i) => {
    if (i > max) max = i
  })
  arr.forEach(i => sum += i)

  return { min: min, max: max, avg: Number((sum / arr.length).toFixed(2)) }
}
  

function summElementsWorker(...arr) {
  arr.reduce((sum, i) => sum + i, 0)
}

function differenceMaxMinWorker(...arr) {
  return Math.max.apply(null, arr) - Math.min.apply(null, arr)
}

function differenceEvenOddWorker(...arr) {
  return arr.filter(i => i % 2 === 0).reduce((a, b) => a + b, 0) - arr.filter(i => i % 2 !== 0).reduce((a, b) => a + b, 0)
}

function averageEvenElementsWorker(...arr) {
  let evens = arr.filter(i => i % 2 === 0)
  return evens.reduce((a, b) => a + b, 0) / evens.length
}

function makeWork (arrOfArr, func) {
  let max = -Infinity
  arr.forEach(i => {
    let result = func(...i)
    if (result > max) max = result
  })
  return max
}







