"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c

  if (d === 0) {
    arr.push(-b / (2 * a))
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a))
    arr.push((-b - Math.sqrt(d)) / (2 * a))
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentage = percent / 100
  let monthlyPersent = percentage / 12
  let sum = amount - contribution
  let amountPerMonth = sum * (monthlyPersent + (monthlyPersent / (((1 + monthlyPersent) ** countMonths) - 1)))
  let totalAmount = (amountPerMonth * countMonths).toFixed(2)
  return Number(totalAmount)
}


