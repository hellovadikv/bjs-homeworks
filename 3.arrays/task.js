function compareArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) return false
  else {
    return arr1.every((i, e) => arr2[e] === i)
  }
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) return 0
  let usersAges = users.filter(i => i.gender === gender).map(i => i = i.age)
  if (usersAges.length === 0) return 0
  return usersAges.reduce((a, b) => a + b, 0) / usersAges.length
}



