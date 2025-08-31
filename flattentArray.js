const flattenArray = (arr, depth = 0) => {
  let res = []
  arr.forEach(el => {
    if (Array.isArray(el) && depth > 0) {
      res.push(...flattenArray(el, depth - 1))
    } else {
      res.push(el)
    }
  })
  return res
}

const array = [1,2,[3,4,5,[6,7,8],[9,10],11],12,13]
console.log(flattenArray(array, 1))
